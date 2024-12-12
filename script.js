function showInfo(name, store) {
            const infoBox = document.getElementById('info');
            const infoTitle = document.getElementById('info-title');
            const infoDetails = document.getElementById('info-details');

            infoTitle.textContent = `商品名: ${name}`;
            infoDetails.textContent = `販売店: ${store} - 詳細は公式サイトをご覧ください！`;

            infoBox.style.display = 'block';
        }
