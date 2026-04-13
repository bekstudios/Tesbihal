/* function tabAc(evt, icerikId) {
    var i, tabIcerik, tabLinkler;

    // Tüm içerikleri gizle
    tabIcerik = document.getElementsByClassName("tab-icerik");
    for (i = 0; i < tabIcerik.length; i++) {
        tabIcerik[i].style.display = "none";
    }

    // Tüm butonlardan "active" sınıfını kaldır
    tabLinkler = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinkler.length; i++) {
        tabLinkler[i].className = tabLinkler[i].className.replace(" active", "");
    }

    // Seçilen içeriği göster ve butona active sınıfı ekle
    document.getElementById(icerikId).style.display = "block";
    evt.currentTarget.className += " active";
} */

const tooltip = document.getElementById('dynamic-tooltip');

// Tüm dokümanı dinleyelim, böylece sonradan eklenen (Markdown vb.) span'lar da çalışır
document.addEventListener('mousemove', function(e) {
    // Mouse'un altındaki elemanı bul
    const target = e.target.closest('.tooltip-hedef');
    
    if (target) {
        const info = target.getAttribute('data-bilgi');
        tooltip.innerText = info;
        
        // Konumlandırma
        tooltip.style.left = e.clientX + 15 + 'px';
        tooltip.style.top = e.clientY - 30 + 'px';
        
        // Göster
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    } else {
        // Eğer mouse bir tooltip hedefi üzerinde değilse gizle
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }
});