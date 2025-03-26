export function Headline({ children, h = 3 }: any) {
  const style = {
    color: '#000',
    fontFamily: 'Inter Medium, sans-serif',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.5,
    margin: 0,
  };

  if (h === 1) {
    return (
      <h1
        style={{
          ...style,
          fontSize: 48,
        }}
      >
        {children}
      </h1>
    );
  }

  if (h === 2) {
    return (
      <h1
        style={{
          ...style,
          fontSize: 36,
        }}
      >
        {children}
      </h1>
    );
  }

  return <h3 style={style}>{children}</h3>;
}

export function Grid({ children, style }: any) {
  return (
    <div
      style={{
        alignContent: 'start',
        display: 'grid',
        gridAutoFlow: 'row',
        gridRowGap: 24,
        gridTemplateColumns: '1fr',
        height: '100%',
        justifyContent: 'start',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
