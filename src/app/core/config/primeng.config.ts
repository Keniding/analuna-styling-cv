import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { definePreset } from '@primeng/themes';

const CustomPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '#fef7f8',
      100: '#fdeef0',
      200: '#fcdde3',
      300: '#fac2cc',
      400: '#f69baa',
      500: '#E8B4BC',  // Rose gold principal
      600: '#d88a9a',
      700: '#c26577',
      800: '#a04d5f',
      900: '#864252',
      950: '#4a2127'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.400}',
          activeColor: '{primary.600}'
        },
        surface: {
          0: '#ffffff',
          50: '#faf8f5',      // Beige muy claro
          100: '#f5f0e8',     // Crema suave
          200: '#ebe0d0',     // Arena claro
          300: '#dcc9af',     // Champagne
          400: '#C9A88A',     // Dorado champagne
          500: '#b8916f',     // Dorado medio
          600: '#a67d5f',     // Dorado oscuro
          700: '#8a6750',     // Marrón dorado
          800: '#715546',     // Marrón
          900: '#5d473b',     // Marrón oscuro
          950: '#31241e'      // Casi negro cálido
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
        surface: {
          0: '#0f172a',
          50: '#1e293b',
          100: '#334155',
          200: '#475569',
          300: '#64748b',
          400: '#94a3b8',
          500: '#cbd5e1',
          600: '#e2e8f0',
          700: '#f1f5f9',
          800: '#f8fafc',
          900: '#ffffff',
          950: '#ffffff'
        },
        highlight: {
          background: 'rgba(232, 180, 188, 0.16)',
          focusBackground: 'rgba(232, 180, 188, 0.24)',
          color: 'rgba(232, 180, 188, 0.87)',
          focusColor: 'rgba(232, 180, 188, 0.87)'
        }
      }
    }
  },
  components: {
    card: {
      root: {
        background: '{surface.0}',
        borderRadius: '16px',
        color: '{surface.700}',
        shadow: '0 4px 6px -1px rgba(232, 180, 188, 0.1), 0 2px 4px -1px rgba(232, 180, 188, 0.06)'
      },
      body: {
        padding: '1.5rem',
        gap: '1rem'
      },
      title: {
        fontSize: '1.5rem',
        fontWeight: '600'
      },
      subtitle: {
        color: '{primary.500}'
      }
    },
    button: {
      root: {
        borderRadius: '12px',
        paddingX: '1.25rem',
        paddingY: '0.75rem'
      }
    },
    inputtext: {
      root: {
        borderRadius: '10px'
      },
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            disabledBackground: '{surface.100}',
            filledBackground: '{surface.50}',
            filledHoverBackground: '{surface.50}',
            filledFocusBackground: '{surface.0}',
            borderColor: '{surface.300}',
            hoverBorderColor: '{primary.400}',
            focusBorderColor: '{primary.500}',
            invalidBorderColor: '{red.400}',
            color: '{surface.700}',
            disabledColor: '{surface.500}',
            placeholderColor: '{surface.500}',
            invalidPlaceholderColor: '{red.400}'
          }
        },
        dark: {
          root: {
            background: '{surface.950}',
            disabledBackground: '{surface.700}',
            filledBackground: '{surface.800}',
            filledHoverBackground: '{surface.700}',
            filledFocusBackground: '{surface.950}',
            borderColor: '{surface.600}',
            hoverBorderColor: '{primary.400}',
            focusBorderColor: '{primary.500}',
            invalidBorderColor: '{red.300}',
            color: '{surface.0}',
            disabledColor: '{surface.400}',
            placeholderColor: '{surface.400}',
            invalidPlaceholderColor: '{red.300}'
          }
        }
      }
    },
    select: {
      root: {
        borderRadius: '10px'
      }
    },
    dialog: {
      root: {
        borderRadius: '16px',
        shadow: '0 20px 25px -5px rgba(232, 180, 188, 0.1), 0 10px 10px -5px rgba(232, 180, 188, 0.04)'
      }
    },
    panel: {
      root: {
        borderRadius: '12px'
      },
      header: {
        borderRadius: '12px'
      }
    }
  }
});

export function providePrimeNGConfig() {
  return providePrimeNG({
    theme: {
      preset: CustomPreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
        cssLayer: false
      }
    },
    ripple: true
  });
}
