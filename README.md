# Getting Started

<video src="https://github.com/mage-ai/assets/raw/refs/heads/main/pro/features/mage-app-embeded.mp4"></video>

Update the environment varialbes in `.env`

```
NEXT_PUBLIC_EMBEDDED_ORIGIN=[the base URL for the app that will be embedding Mage]
NEXT_PUBLIC_EMBEDDED_BASE_PATH=[the URL for the app that will be embedding Mage. This should be the same as the base URL and can have an additional path]
NEXT_PUBLIC_MAGE_API_ENDPOINT=[the base URL for the Mage API endpoints. This could be the same as the Mage app]
```

Example:

```
NEXT_PUBLIC_EMBEDDED_ORIGIN=https://app.mage.ai
NEXT_PUBLIC_EMBEDDED_PATH=/optional_namespace
NEXT_PUBLIC_MAGE_API_ENDPOINT=https://api.mage.ai
```

## Start the app

Note: if you have a publicly accessible URL for the app that will be embedding Mage,
you don’t need to install Ngrok.

### With Ngrok

```bash
./dev.sh
```

### Without Ngrok

```bash
yarn dev
```

## Mage Pro environment variables

Configure these environment variables in Mage Pro:

```bash
export ALLOWED_PARENT_ORIGINS=https://app.mage.ai,https://other.mage.ai
export CUSTOM_DESIGN_STYLES_EMBED_DIR=/home/src/custom_design_styles
export EMBEDDABLE=1
```

## Custom design and styles

In the directory for environment variable `CUSTOM_DESIGN_STYLES_EMBED_DIR`,
add the following 4 files:

- `design.yaml`

### Add block buttons

Customize the buttons that show up by default on the Add new block bar on the notebook page
while building a pipeline.

<Frame>
    <p align="center">
    <img
        alt="Custom button layout"
        src="https://github.com/mage-ai/assets/blob/main/platform/design-add-block_buttons.png?raw=true"
    />
    </p>
</Frame>


<Note>
    You must enable the feature labeled `Add new block v2` for this to take effect.
</Note>

Add the following to the `design.yaml` file:

```yaml
pages:
  pipelines:
    edit:
      buttons:
        block:
          add:
            items:
              - global_data_product
              - templates/list
            items_more:
              - custom
              - data_exporter
              - data_loader
              - dbt
              - markdown
              - sensor
              - templates/new
              - transformer
```

Another example:

```yaml
pages:
  pipelines:
    edit:
      buttons:
        block:
          languages:
            - python
            - sql
          add:
            items:
              - python
              - sql
            items_more:
              - data_loader
              - transformer
              - data_exporter
      version: "0"
components:
  header:
    hidden: true
```

You can change the order of what appears first as well as which buttons are visible by default
and which are displayed when the dropdown menu is shown after clicking the button <b>All blocks</b>.

For buttons you want shown by default, add the button to the key labeled `items`.

For buttons you want in the dropdown menu, add the button to the key labeled `items_more`.

### Colors

- `dark.scss`: colors and UI colors for dark mode
- `light.scss`: colors and UI colors for light mode

Here are the example color variables that can be configured for `dark.scss` and `light.scss` modes:

```scss
// 100% = FF
// 95% = F2
// 90% = E6
// 85% = D9
// 80% = CC
// 75% = BF
// 70% = B3
// 65% = A6
// 60% = 99
// 55% = 8C
// 50% = 80
// 45% = 73
// 40% = 66
// 35% = 59
// 30% = 4D
// 25% = 40
// 20% = 33
// 15% = 26
// 10% = 1A
// 5% = 0D
// 0% = 00
$backgrounds-layers0: #000000;
$backgrounds-layers1: #0A0A10;
$backgrounds-layers2: #111118;
$backgrounds-layers3: #16161E;
$backgrounds-layers4: #1E1E28;
$backgrounds-layers5: #252532;
$colors-accentlo: #181820;
$colors-accent: #22222C;
$colors-accenthi: #2C2C38;
$colors-black: #000000;
$colors-blackfixed: #000000;
$colors-blacklo: #00000099;
$colors-blackmd: #000000B3;
$colors-blackhi: #000000D9;
$colors-blue: #4F46E5;
$colors-bluehi: #4F46E5D9;
$colors-bluelo: #4F46E54D;
$colors-bluemd: #4F46E5B3;
$colors-bluemuted: #818CF8;
$colors-bluetext: #6366F1;
$colors-orange: #FB7185;
$colors-orangelo: #FB718533;
$colors-orangemd: #FB7185D9;
$colors-orangehi: #FB7185B3;
$colors-glow2: #191924;
$colors-glow: #6D28D9;
$colors-glowlo: #6D28D999;
$colors-glowmd: #6D28D9B3;
$colors-glowhi: #6D28D9D9;
$colors-gray: #4B5563;
$colors-grayhi: #4B5563D9;
$colors-graylo: #4B556373;
$colors-graymd: #4B5563B3;
$colors-green: #059669;
$colors-greenhi: #059669D9;
$colors-greenlo: #05966933;
$colors-greenmd: #059669B3;
$colors-pink: #DB2777;
$colors-pinkhi: #DB2777D9;
$colors-pinklo: #DB277733;
$colors-pinkmd: #DB2777B3;
$colors-purple: #7C3AED;
$colors-purplehi: #7C3AEDD9;
$colors-purplelo: #7C3AED33;
$colors-purplemd: #7C3AEDB3;
$colors-purpledeep: #6D28D9;
$colors-red: #DC2626;
$colors-redhi: #DC2626D9;
$colors-redlo: #DC262633;
$colors-redmd: #DC2626B3;
$colors-rose: #9D174D;
$colors-rosehi: #9D174DD9;
$colors-roselo: #9D174D33;
$colors-rosemd: #9D174DB3;
$colors-sky: #0284C7;
$colors-skylo: #0284C733;
$colors-skymd: #0284C7B3;
$colors-skyhi: #0284C7D9;
$colors-teal: #0F766E;
$colors-tealhi: rgba(15, 118, 110, 0.5);
$colors-teallo: #0F766E33;
$colors-tealmd: #0F766EB3;
$colors-white: #FFFFFF;
$colors-whitefixed: #FFFFFF;
$colors-whitehi: #FFFFFF1A;
$colors-whitelo: #FFFFFF80;
$colors-whitemd: #FFFFFFB3;
$colors-yellow: #D97706;
$colors-yellowhi: #D97706D9;
$colors-yellowlo: #D9770633;
$colors-yellowmd: #D9770680;
$colors-error: #B91C1C;
$colors-errorlo: #B91C1C33;
$colors-errormd: #B91C1CB3;
$colors-errorhi: #B91C1CD9;
$colors-success: #047857;
$colors-successlo: rgba(4, 120, 87, 0.1);
$colors-successmd: rgba(4, 120, 87, 0.2);
$colors-successhi: rgba(4, 120, 87, 0.3);
$colors-warning: #B45309;
$colors-warninglo: $colors-yellowlo;
$colors-warningmd: $colors-yellowhi;
$colors-warninghi: $colors-yellow;
$colors-statuses-error: $colors-error;
$colors-statuses-errorlo: $colors-errorlo;
$colors-statuses-errormd: $colors-errormd;
$colors-statuses-errorhi: $colors-errorhi;
$colors-statuses-success: $colors-success;
$colors-statuses-successlo: $colors-successlo;
$colors-statuses-successmd: $colors-successmd;
$colors-statuses-successhi: $colors-successhi;
$colors-statuses-warning: $colors-warning;
$colors-statuses-warningmd: $colors-warningmd;
$colors-statuses-warninglo: $colors-warninglo;
$colors-statuses-warninghi: $colors-warninghi;
// Glow
$colors-glow-azure: #0EA5E9;
$colors-glow-black: #10B981;
$colors-glow-blue: #3B82F6;
$colors-glow-orange: #F59E0B;
$colors-glow-gray: #6B7280;
$colors-glow-green: #10B981;
$colors-glow-pink: #EC4899;
$colors-glow-purple: #8B5CF6;
$colors-glow-red: #EF4444;
$colors-glow-rose: #E11D48;
$colors-glow-sky: #0EA5E9;
$colors-glow-teal: #14B8A6;
$colors-glow-white: #F9FAFB;
$colors-glow-yellow: #F59E0B;
// Brand
$colors-green-brand: #059669;
$colors-green-brandlo: #0596694D;
$colors-green-brandmd: #059669B3;
$colors-green-brandhi: #059669D9;
$colors-azure: #4F46E5;
$colors-azurelo: #4F46E54D;    // Lighter/washed out (like 50% opacity)
$colors-azuremd: #4F46E5B3;    // Mid tone (like 70% opacity)
$colors-azurehi: #4F46E5D9;    // Very light (like 10% opacity)
$colors-brand-conditional: $colors-azure;
$colors-brand-conditionallo: $colors-azurelo;
$colors-brand-conditionalmd: $colors-azuremd;
$colors-brand-conditionalhi: $colors-azurehi;
$colors-brand-inverse: $colors-green-brand;
$colors-brand-inverselo: $colors-green-brandlo;
$colors-brand-inversemd: $colors-green-brandmd;
$colors-brand-inversehi: $colors-green-brandhi;
// Elements
$colors-earth: #78350F;
$colors-earthlo: #78350F4D;
$colors-earthmd: #78350FB3;
$colors-earthhi: #78350FD9;
$colors-fire: #B91C1C;
$colors-firelo: #B91C1C4D;
$colors-firemd: #B91C1CB3;
$colors-firehi: #B91C1CD9;
$colors-ice: #0E7490;
$colors-icelo: #0E74904D;
$colors-icemd: #0E7490B3;
$colors-icehi: #0E7490D9;
$colors-light: #FFFFFF;
$colors-lightlo: #FFFFFF4D;
$colors-lightmd: #FFFFFFB3;
$colors-lighthi: #FFFFFFD9;
$colors-lightning: #D97706;
$colors-lightninglo: #D977064D;
$colors-lightningmd: #D97706B3;
$colors-lightninghi: #D97706D9;
$colors-psychic: #9333EA;
$colors-psychiclo: #9333EA4D;
$colors-psychicmd: #9333EAB3;
$colors-psychichi: #9333EAD9;
$colors-shade: #334155;
$colors-shadelo: #3341554D;
$colors-shademd: #334155B3;
$colors-shadehi: #334155D9;
$colors-shadow: #000000;
$colors-shadowlo: #0000004D;
$colors-shadowmd: #000000B3;
$colors-shadowhi: #000000D9;
$colors-spark: #B45309;
$colors-sparklo: #B453094D;
$colors-sparkmd: #B45309B3;
$colors-sparkhi: #B45309D9;
$colors-stone: #334155;
$colors-stonelo: #3341554D;
$colors-stonemd: #334155B3;
$colors-stonehi: #334155D9;
$colors-water: #1D4ED8;
$colors-waterlo: #1D4ED84D;
$colors-watermd: #1D4ED8B3;
$colors-waterhi: #1D4ED8D9;
$colors-wind: #6D28D9;
$colors-windlo: #6D28D94D;
$colors-windmd: #6D28D9B3;
$colors-windhi: #6D28D9D9;
/* ----------------------------------------------------------------------------------------------- */
$backgrounds-blur: rgba(0, 0, 0, 0.7);
$backgrounds-body: #0A0A10;
$backgrounds-graph: $backgrounds-layers5;
$backgrounds-button-base-default: #252532;
$backgrounds-button-base-hover: #32324A;
$backgrounds-button-basic-default: $colors-graylo;
$backgrounds-button-basic-hover: #32324A;
$backgrounds-button-primary-default: $colors-green-brand;
$backgrounds-button-primary-hover: $colors-green-brandmd;
$backgrounds-button-secondary-default: $colors-purple;
$backgrounds-button-secondary-hover: $colors-purplemd;
$backgrounds-button-gradient-purple: linear-gradient(102deg, #7C3AED 0%, rgba(124, 58, 237, 0.30) 72.46%);
$backgrounds-input-base-active: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$backgrounds-input-base-default: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.10) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.10);
$backgrounds-input-base-focus: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$backgrounds-input-base-hover: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.12) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.12);
$backgrounds-menu-base-default: $colors-grayhi;
$backgrounds-menu-contained-default: #4B5563;
$backgrounds-scrollbar-thumb-default: #4B5563;
$backgrounds-scrollbar-thumb-hover: #32324A99;
$backgrounds-scrollbar-track-default: #4B55631A;
$backgrounds-scrollbar-track-hover: #4B5563B3;
$backgrounds-gradient-blue: radial-gradient(155.7% 118.3% at 22.25% 145.77%, $colors-bluelo 0%, rgba($colors-blue, 0.00) 100%), rgba($colors-blue, 0.10);
$backgrounds-gradient-purple: linear-gradient(281deg, rgba(124, 58, 237, 0.40) -43.95%, rgba(124, 58, 237, 0.00) 80.54%);
$backgrounds-gradient-red: linear-gradient(90deg, rgba(220, 38, 38, 0.30) 2.21%, rgba(220, 38, 38, 0.30) 2.51%, rgba(220, 38, 38, 0.00) 29.51%);
$backgrounds-gradient-blue-reverse: linear-gradient(281deg, rgba(79, 70, 229, 0.00) -43.95%, rgba(79, 70, 229, 0.40) 80.54%);
$backgrounds-gradient-purple-reverse: linear-gradient(281deg, rgba(124, 58, 237, 0.00) -43.95%, rgba(124, 58, 237, 0.40) 80.54%);
$backgrounds-gradient-red-reverse: linear-gradient(270deg, rgba(220, 38, 38, 0.30) 2.21%, rgba(220, 38, 38, 0.30) 2.51%, rgba(220, 38, 38, 0.00) 29.51%);
$backgrounds-apps-coder-base-default: $backgrounds-layers4;
$blue: $backgrounds-gradient-blue;
$borders-color-base-default: $colors-graymd;
$borders-color-base-active: $colors-grayhi;
$borders-color-base-hover: $colors-graylo;
$borders-color-button-base-default: $colors-gray;
$borders-color-button-base-hover: #4B5563;
$borders-color-button-basic-default: $colors-gray;
$borders-color-button-basic-hover: #4B5563;
$borders-color-button-primary-default: $colors-greenlo;
$borders-color-button-primary-hover: $colors-green;
$borders-color-button-secondary-default: $colors-purplelo;
$borders-color-button-secondary-hover: $colors-purple;
$borders-color-input-base-active: #6366F1;
$borders-color-input-base-default: #4F46E5;
$borders-color-input-base-focus: #6366F1;
$borders-color-input-base-hover: #6366F1;
$borders-color-input-basic-default: $colors-gray;
$borders-color-input-basic-focus: $colors-graylo;
$borders-color-input-basic-hover: $colors-grayhi;
$borders-color-input-basic-active: $colors-graymd;
$borders-color-muted-default: $colors-graylo;
$borders-color-muted-hover: #4B55631A;
$buttons-border-color-base-default: $colors-gray;
$buttons-border-color-base-hover: #4B5563;
$buttons-border-color-basic-default: $colors-gray;
$buttons-border-color-basic-hover: #4B5563;
$buttons-border-color-secondary-default: #4B5563;
$buttons-border-color-secondary-hover: #4B5563;
$buttons-border-color-primary-default: #4B5563;
$buttons-border-color-primary-hover: #4B5563;
$buttons-outline-color-base-default: $colors-gray;
$buttons-outline-color-base-hover: #4B5563;
$buttons-outline-color-basic-default: $colors-whitelo;
$buttons-outline-color-basic-hover: #FFFFFF33;
$buttons-outline-color-primary-default: $colors-azure;
$buttons-outline-color-primary-hover: $colors-azurehi;
$buttons-outline-color-secondary-default: $colors-purple;
$buttons-outline-color-secondary-hover: $colors-purplehi;
$colors-backgrounds-blur: rgba(0, 0, 0, 0.8);
$colors-backgrounds-body: #0A0A10;
$colors-backgrounds-button-base-default: #252532;
$colors-backgrounds-button-base-hover: #32324A1A;
$colors-backgrounds-button-basic-default: transparent;
$colors-backgrounds-button-basic-hover: #32324A1A;
$colors-backgrounds-button-primary-default: #7C3AED;
$colors-backgrounds-button-primary-hover: #7C3AEDD9;
$colors-backgrounds-button-secondary-default: #059669;
$colors-backgrounds-button-secondary-hover: #059669D9;
$colors-backgrounds-input-base-active: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$colors-backgrounds-input-base-default: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.10) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.10);
$colors-backgrounds-input-base-focus: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$colors-backgrounds-input-base-hover: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.12) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.12);
$colors-backgrounds-menu-base-default: #4B5563B3;
$colors-backgrounds-menu-contained-default: #4B5563;
$colors-backgrounds-scrollbar-thumb-default: #4B5563;
$colors-backgrounds-scrollbar-thumb-hover: #32324A99;
$colors-backgrounds-scrollbar-track-default: #4B55631A;
$colors-backgrounds-scrollbar-track-hover: #4B5563B3;
$colors-borders-base-default: #4B5563;
$colors-borders-base-hover: #4B5563D9;
$colors-borders-button-base-default: $colors-gray;
$colors-borders-button-base-hover: #4B5563;
$colors-borders-button-basic-default: $colors-gray;
$colors-borders-button-basic-hover: #4B5563;
$colors-borders-button-primary-default: #4B5563;
$colors-borders-button-primary-hover: #4B5563;
$colors-borders-button-secondary-default: #4B5563;
$colors-borders-button-secondary-hover: #4B5563;
$colors-borders-input-base-active: #6366F1;
$colors-borders-input-base-default: #4F46E5;
$colors-borders-input-base-focus: #6366F1;
$colors-borders-input-base-hover: #6366F1;
$colors-borders-muted-default: $colors-graylo;
$colors-borders-muted-hover: #4B55631A;
$colors-icons-base: #FFFFFF;
$colors-icons-inverted: #000000;
$colors-outline-button-base-default: $colors-gray;
$colors-outline-button-base-hover: #4B5563;
$colors-outline-button-basic-default: $colors-whitelo;
$colors-outline-button-basic-hover: #FFFFFF33;
$colors-outline-button-primary-default: #7C3AED;
$colors-outline-button-primary-hover: #7C3AED;
$colors-outline-button-secondary-default: #059669;
$colors-outline-button-secondary-hover: #059669;
$colors-placeholder-input-base: #FFFFFF33;
$colors-typography-button-base: #F3F4F6;
$colors-typography-text-base: #FFFFFF;
$colors-typography-text-blue: #6366F1;
$colors-typography-text-inverted: #000000;
$colors-typography-text-muted: $colors-whitemd;
$fonts-color-button-base: #F3F4F6;
$fonts-color-code-base: #FB7185;
$fonts-color-text-base: #FFFFFF;
$fonts-color-text-blue: #6366F1;
$fonts-color-text-inverted: $colors-black;
$fonts-color-text-muted: $colors-whitelo;
$fonts-color-text-secondary: $colors-whitemd;
$fonts-color-text-warning: $colors-statuses-warning;
$icons-color-base: $colors-white;
$icons-color-inverted: $fonts-color-text-inverted;
$icons-color-muted: $fonts-color-text-muted;
$icons-color-secondary: $colors-whitemd;
$inputs-background-base-active: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$inputs-background-base-default: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.10) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.10);
$inputs-background-base-focus: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.15);
$inputs-background-base-hover: radial-gradient(155.7% 118.3% at 22.25% 145.77%, rgba(124, 58, 237, 0.12) 0%, rgba(124, 58, 237, 0.00) 100%), rgba(124, 58, 237, 0.12);
$inputs-border-color-base-active: #6366F1;
$inputs-border-color-base-default: #4F46E5;
$inputs-border-color-base-focus: #6366F1;
$inputs-border-color-base-hover: #6366F1;
$inputs-placeholder-color: #FFFFFF33;
$link-color-base: $colors-azure;
$link-color-hover: $colors-bluetext;
$menus-background-base-default: $colors-graylo;
$menus-background-gradient-default: #252532D9;
$menus-background-contained-default: #4B5563D9;
$menus-blur-base: saturate(100%) blur(3px);
$scrollbars-background-thumb-default: #4B5563;
$scrollbars-background-thumb-hover: #32324A99;
$scrollbars-background-track-default: #4B55631A;
$scrollbars-background-track-hover: #4B5563B3;
$modal-background-color-base: rgba(10, 10, 16, 0.98);
$modal-box-shadow-base: $colors-graymd;
// Header
$header-background-color-base: $colors-black;
$multi-select-background-color-base: $colors-azurelo;
$multi-select-border-color-base: $colors-azure;
$glow-opacity: 0.7;
$select-input-background-image: "<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path clip-rule='evenodd' d='M20.5121 7.78554C20.8515 8.06839 20.8974 8.57284 20.6145 8.91227L14.4583 16.2998C13.1789 17.835 10.821 17.835 9.54167 16.2998L3.38539 8.91227C3.10254 8.57284 3.1484 8.06839 3.48782 7.78554C3.82725 7.50269 4.3317 7.54855 4.61455 7.88797L10.7708 15.2755C11.4105 16.0431 12.5895 16.0431 13.2291 15.2755L19.3854 7.88797C19.6682 7.54855 20.1727 7.50269 20.5121 7.78554Z' fill='%23F3F4F6' fill-rule='evenodd' /></svg>";
$ai-glow-color-base: $backgrounds-button-basic-default;
$ai-glow-color-glow: #0EA5E9;
$ai-glow-color-overlay: #7C3AED;
```

### Styles

- `shared.scss`: contains shared variables; e.g. font style, border width, etc.

Here are the example variables that can be configured for `shared.scss`:

```scss
$borders-gradient-width: 2px;
$borders-outline-offset: 2px;
$borders-outline-width: 3px;
$borders-outline-total: calc(var(--borders-outline-offset) + var(--borders-outline-width));
$borders-radius-base: 12px;
$borders-radius-button: 24px;
$borders-radius-round: 50px;
$borders-radius-md: 20px;
$borders-radius-sm: 8px;
$borders-radius-xs: 4px;
$borders-style: solid;
$borders-width: 2px;
$buttons-grid-column-gap-base: 12;
$buttons-grid-column-gap-sm: 8;
$buttons-padding-base: 14px 18px;
$buttons-padding-sm: 12px 16px;
$buttons-padding-xs: 6px 10px;
$fonts-family-base-black: Montserrat Black, sans-serif;
$fonts-family-base-bold: Montserrat Bold, sans-serif;
$fonts-family-base-lightfont: Montserrat Light, sans-serif;
$fonts-family-base-medium: Montserrat Medium, sans-serif;
$fonts-family-base-regular: Montserrat Regular, sans-serif;
$fonts-family-base-semibold: Montserrat SemiBold, sans-serif;
$fonts-family-monospace-black: Source Code Pro Bold, monospace;
$fonts-family-monospace-bold: Source Code Pro Bold, monospace;
$fonts-family-monospace-bolditalic: Source Code Pro Bold Italic, monospace;
$fonts-family-monospace-lightfont: Source Code Pro Light, monospace;
$fonts-family-monospace-medium: Source Code Pro Medium, monospace;
$fonts-family-monospace-regular: Source Code Pro Regular, monospace;
$fonts-family-monospace-regularitalic: Source Code Pro Italic, monospace;
$fonts-family-monospace-semibold: Source Code Pro SemiBold, monospace;
$fonts-lineheight-base: 1.5;
$fonts-lineheight-md: 150%;
$fonts-lineheight-monospace: 170%;
$fonts-lineheight-sm: 145%;
$fonts-lineheight-xs: 130%;
$fonts-lineheight-lg: 165%;
$fonts-lineheight-monospace-lg: 170%;
$fonts-size-base: 18px;
$fonts-size-lg: 20px;
$fonts-size-sm: 16px;
$fonts-size-xs: 14px;
$fonts-style-base: normal;
$fonts-style-italic: italic;
$fonts-weight-bold: 700;
$fonts-weight-light: 300;
$fonts-weight-medium: 500;
$fonts-weight-regular: 400;
$fonts-weight-semibold: 600;
$fonts-weight: 400;
$grid-gutter-width-base: 16;
$grid-gutter-width-sm: 12;
$grid-gutter-width-xs: 8;
$header-height: 64px;
$header-padding-vertical: 12px;
$header-padding-horizontal: 16px;
$header-z-index: 100;
$icons-size-base: 24;
$icons-size-sm: 20;
$icons-size-xs: 16;
$inputs-border-radius-base: 16px;
$inputs-border-style-base: solid;
$inputs-border-width-base: 2px;
$inputs-padding-base: 16px 20px;
$inputs-padding-sm: 10px 16px;
$margin-base: 16px;
$margin-sm: 12px;
$margin-xs: 8px;
$menus-border-radius-base: 12px;
$menus-padding-base: 12px 12px;
$modal-blur-base: 15px;
$modal-blur-md: 25px;
$padding-base: 16px;
$padding-container: 14px;
$padding-sm: 12px;
$padding-vertical-lg: 20px;
$padding-vertical-base: $buttons-padding-base;
$padding-vertical-sm: $buttons-padding-sm;
$padding-vertical-xs: $buttons-padding-xs;
$padding-xs: 8px;
$scrollbars-border-radius-thumb: 50px;
$scrollbars-border-radius-track: 15px;
$scrollbars-width-thumb: 6px;
$scrollbars-width-track: 8px;
$size-lg: lg;
$size-md: md;
$size-sm: sm;
$size-xl: xl;
$size-xxl: xxl;
$size-xxxl: xxxl;
$unit: $margin-xs;
$headline-font-size-1: 72px;
$headline-font-size-2: 56px;
$headline-font-size-3: 36px;
$headline-font-size-4: 28px;
$headline-font-size-5: 22px;
$headline-line-height-1: 130%;
$headline-line-height-2: 130%;
$headline-line-height-3: 135%;
$headline-line-height-4: 135%;
$headline-line-height-5: 140%;
$transition-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
$header-content-gap: $padding-container - $header-padding-vertical;
$header-offset: $header-height + $header-content-gap;
$modal-box-shadow: 10px 10px 100px 35px;

$menu-shadow:
  0 15px 25px -4px rgba(0, 0, 0, 0.15),
  0 8px 15px -5px rgba(0, 0, 0, 0.1);
```
