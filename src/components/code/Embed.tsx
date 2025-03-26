'use client'

import axios from 'axios';
import ls from 'local-storage';
import { useCallback, useEffect, useRef, useState } from 'react';

const EMBEDDED_ORIGIN = process.env.NEXT_PUBLIC_EMBEDDED_ORIGIN
const EMBEDDED_PATH = process.env.NEXT_PUBLIC_EMBEDDED_PATH
const MAGE_API_ENDPOINT = process.env.NEXT_PUBLIC_MAGE_API_ENDPOINT

function queryFromUrl(url: string = null): any {
  const query = {};
  let urlToTest = url;

  if (!url && typeof window !== 'undefined') {
    urlToTest = window.location.search;
  }

  if (urlToTest) {
    const params = new URLSearchParams(urlToTest.split('?').slice(1).join(''));
    // @ts-ignore
    Array.from(params.keys()).forEach((key: string) => {
      const isList = key.match(/\[\]/);

      // @ts-ignore
      const values = params.getAll(key);
      if (values.length === 1 && !isList) {
        // @ts-ignore
        [query[key]] = values;
      } else {
        // @ts-ignore
        query[key] = values;
      }
    });
  }

  return query;
}

export default function Embed({ headerHeight }) {
  const iframeRef = useRef(null);

  const [authCookies, setAuthCookies] = useState({});
  const [iframeSrc, setIframeSrc] = useState(`${EMBEDDED_ORIGIN}/${EMBEDDED_PATH}/embeds`);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to send data to the iframe
  const sendDataToIframe = useCallback((data) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      console.log('Sending data to iframe:', data);
      iframeRef.current.contentWindow.postMessage({
        data,
        type: 'parentData',
      }, EMBEDDED_ORIGIN);
    } else {
      console.warn('Iframe reference not available');
    }
  }, []);

  const handleMessage = useCallback((event) => {
    // Verify the origin of the message for security
    if (event.origin === EMBEDDED_ORIGIN) {
      console.log('Received message from iframe:', event.data?.type, event.data);

      if (event.data && event.data.type === 'setCookie') {
        // Store cookies in state
        const { cookies } = event.data;

        if (cookies && Object.keys(cookies).length > 0) {
          // Store cookies both in document and in state
          Object.entries(cookies).forEach(([key, cookieString]: [string, string]) => {
            const [cookieName, cookieValue] = cookieString.split('=');
            document.cookie = `${cookieName}=${cookieValue}; path=/; SameSite=None; Secure`;
          });

          setAuthCookies(cookies);
          setIsAuthenticated(true);
          // Store the oauth_token cookie in local storage for future use
          if (cookies.oauth_token) {
            // @ts-ignore
            ls.set('oauth_token', cookies.oauth_token);
          }
          console.log('Cookies stored in parent:', Object.keys(cookies));
        }
      } else if (event.data && event.data.type === 'iframeReady') {
        // Iframe is ready to receive data
        console.log('Iframe is ready to receive data');

        // Check if we already have the oauth_token cookie stored
        // @ts-ignore
        const storedToken = ls.get('oauth_token');
        console.log('TOKEN', storedToken)

        if (storedToken) {
          console.log('Using stored oauth_token');
          // If we have a stored token, use it
          const cookies = { oauth_token: storedToken };
          setAuthCookies(cookies);
          setIsAuthenticated(true);

          // Send the stored token to the iframe
          iframeRef.current.contentWindow.postMessage({
            cookies,
            type: 'authCookies',
          }, EMBEDDED_ORIGIN);
        } else {
          // Otherwise, proceed with authentication request
          axios.request({
            data: {
              api_key: 'zkWlN0PkIKSN0C11CfUHUj84OT5XOJ6tDZ6bDRO2',
              // This is how you authenticate with the current user with the Mage Pro API
              session: {
                // email: 'admin@admin.com',
                // OR
                username: 'admin',
                password: 'admin',
              },
            },
            method: 'POST',
            responseType: 'json',
            headers: {
              'Content-Type': 'application/json',
            },
            url: `${MAGE_API_ENDPOINT}/api/sessions`,
          }).then(({ data }) => {
            console.log('Sending data to iFrame', data);
            sendDataToIframe(data);
          });
        }
      } else if (event.data && event.data.type === 'dataReceived') {
        // Confirmation that iframe received our data
        console.log('Iframe confirmed data receipt:', event.data.status, event.data);
      }
    }
  }, [sendDataToIframe]);

  // Function to reload the iframe with authentication
  useEffect(() => {
    console.log('Authenticated?', isAuthenticated);
    const iframe: any = iframeRef.current;
    if (iframe && isAuthenticated) {
      // You can either reload the iframe or just send a message to it

      const query = queryFromUrl();
      const magePath = decodeURIComponent(query.mage_path ?? 'pipelines/example_pipeline/edit?hide[]=header');
      const src = `${EMBEDDED_ORIGIN}/${EMBEDDED_PATH}/${magePath}`;

      if (iframe.src !== src) {
        console.log('RELOADING', src);

        iframe.src = src;

        setIframeSrc(src);
      }
    }
  }, [isAuthenticated, iframeSrc]);

  useEffect(() => {
    // Add event listener for post messages
    window.addEventListener('message', handleMessage);

    // Clean up the event listener
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  return (
    <iframe
      allow="storage-access cross-origin-isolated"
      ref={iframeRef}
      src={iframeSrc}
      key={iframeSrc}
      style={{
        border: 'none',
        boxSizing: 'border-box',
        height: '100vh',
        margin: 0,
        overflow: 'hidden',
        padding: `${headerHeight}px 0 0 0`,
        position: 'absolute',
        width: '100vw',
      }}
      title="Embedded Content"
    />
  );
}
