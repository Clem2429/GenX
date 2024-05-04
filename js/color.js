        const colorPicker = document.getElementById('color-picker');
        const hslCheckbox = document.getElementById('hsl-checkbox');
        const rgbCheckbox = document.getElementById('rgb-checkbox');
        const hexCheckbox = document.getElementById('hex-checkbox');
        const colorPreview = document.getElementById('color-preview');

        function updateColorPreview() {
            const color = colorPicker.value;
            let colorString = '';

            if (hslCheckbox.checked) {
                const hslColor = hexToHSL(color);
                colorString += `HSL: ${hslColor.h.toFixed(0)}, ${hslColor.s.toFixed(0)}%, ${hslColor.l.toFixed(0)}%<br>`;
            }
            if (rgbCheckbox.checked) {
                const rgbColor = hexToRGB(color);
                colorString += `RGB: ${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}<br>`;
            }
            if (hexCheckbox.checked) {
                colorString += `Hexadecimal: ${color}<br>`;
            }

            colorPreview.innerHTML = colorString;
            colorPreview.style.backgroundColor = color;
        }

        function hexToHSL(hex) {
            const r = parseInt(hex.substring(1, 3), 16) / 255;
            const g = parseInt(hex.substring(3, 5), 16) / 255;
            const b = parseInt(hex.substring(5, 7), 16) / 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0; // achromatic
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }

            return { h: h * 360, s: s * 100, l: l * 100 };
        }

        function hexToRGB(hex) {
            return {
                r: parseInt(hex.substring(1, 3), 16),
                g: parseInt(hex.substring(3, 5), 16),
                b: parseInt(hex.substring(5, 7), 16)
            };
        }

        colorPicker.addEventListener('input', updateColorPreview);
        hslCheckbox.addEventListener('change', updateColorPreview);
        rgbCheckbox.addEventListener('change', updateColorPreview);
        hexCheckbox.addEventListener('change', updateColorPreview);

        updateColorPreview();


        function copyText() {
            var textToCopy = document.getElementById('color-preview').innerText;
          
            // Utiliser l'API Clipboard pour copier le texte dans le presse-papiers
            navigator.clipboard.writeText(textToCopy)
              .then(() => {
                alert('Le résultat a été copié.');
              })
              .catch(err => {
                console.error('Erreur lors de la copie du texte: ', err);
                alert('Une erreur est survenue lors de la copie.');
              });
          }