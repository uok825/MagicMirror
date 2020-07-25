# MagicMirror
Raspberry Zero ile Akıllı Ayna yapımı ve yaparken karşılaştığım sorunlar.

### Gereken donanım,eşyalar ve fiyatları
*  Raspberry Pi Zero Wireless(W veya WH) - 85₺ - [Link](https://market.samm.com/raspberry-pi-zero-w)
*  Monitör için Konya'da bulunan bilgisayarcılar çarşısına gittim ve esnafları gezerken ayağı kırık bir şekilde Samsung 19" monitör buldum. - 150₺
*  Mini HDMI to VGA çevirici(Monitörünüz HDMI destekliyorsa Mini HDMI to HDMI kablosu alabilirsiniz.) - 35₺ - Esnafdan alındı aynı ürün [burada](https://urun.n11.com/diger-bilgisayar-yedek-parcalari/mini-hdmi-to-vga-kablo-cevirici-donusturucu-hdmi-ses-destekli-bst-P219387924?gclsrc=aw.ds&&gclid=CjwKCAjwsO_4BRBBEiwAyagRTVnHPqpTWFgqWJqJPgQ0x-ZhH-cBtHG7TYB-0Lu3BZf1d-UIT6rNThoCp8YQAvD_BwE) da bulunuyor.
*  5V 3A adaptör - 30₺ ama kuponla 10₺'ye aldım. - [Link](https://www.trendyol.com/syrox/3-0-amper-sarj-aleti-p-5562839)
*  Heatsink kullanmadım ama kullanmanızı kesinlikle öneriyorum. - [Örnek Link](https://market.samm.com/raspberry-pi-sogutucu-set)
*  PIR Sensör (Neden kullandığım aşşağıda mevcut.) - 10₺ - Esnafdan alındı aynı ürün [burada](https://www.robotistan.com/hc-sr501-ayarlanabilir-ir-hareket-algilama-sensoru-pir) da mevcut.
*  5V Röle Kartı (Neden kullandığım aşşağıda mevcut.) - 5₺ - Esnafdan alındı aynı ürün [burada](https://www.robotistan.com/1-way-5v-relay-module-tekli-5v-role-karti) da mevcut.
*  Micro SD Card, ben 16GB kullandım 8GB kullanmanızı önermem. - 30₺ -  A101'den aldım ayın ürün [burada](https://www.hepsiburada.com/sandisk-ultra-16gb-80mb-s-microsdhc-microsdxc-uhs-i-hafiza-karti-sdsquns-016g-gn3mn-p-HBV0000084R77?magaza=Hepsiburada&wt_gl=cpc.6805.shop.nelk.foto-aksesuar-ssc&gclid=CjwKCAjwsO_4BRBBEiwAyagRTTUYnhCSyu9SB2iAu_guk18WVbce5p-6DK112QeTrl7xf_MC-wYSERoCAIEQAvD_BwE) da mevcut.
*  Çerçeve (100x60cm) - 75₺ - Marangozdan yaptırıldı.
*  Reflekte Cam - 80₺ -  Camcıdan kestirildi, arkasına siyah araba filmi kapladım.
*  Biraz lehim teli, havya ve lehim bilgisi (PIR ve Röle için)(WH versiyonu aldıysanız gerekli değil.)
*  Erkek-Dişi jumper kablo (PIR ve Röle için)
*  Micro SD Card okuyucu  
### Gereken yazılımlar
*  Gereken yazılım son sürüm [Raspbian](https://www.raspberrypi.org/downloads/raspberry-pi-os/) burada kullanacağınız Raspbian: Lite sürümü olmamalı, önerilen yazılımlar işimize yaramasa da yükleyip yüklememek size kalıyor. Ben burada "Raspberry Pi OS (32-bit) with desktop" Mayıs 2020 sürümünü kullandım.
*  Raspberry Zero için derlenmiş özel yükleme scripti:
  #### bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
*  Windows kullanıcısıysanız WinSCP ve Putty programlarını şiddetle öneriyorum, düzenleme ve kontrol açısından çok işimize yarıyorlar. [WinSCP](https://winscp.net/eng/downloads.php) - [Putty](https://winscp.net/eng/downloads.php#putty)
*  SD Card Formatter [Link](https://www.sdcard.org/downloads/formatter/)
*  Balena Etcher [Link](https://www.balena.io/etcher/)	
*  VNC Viewer [Link]()

## Raspberry Zero'nun hazırlanması
* Öncelikle SD Card okuyucumuza SD Cardımızı takıyoruz ve bilgisayara yerleştiriyoruz. SD Card Formatter uygulamasından kartımızı biçimlendiriyoruz. Daha sonra Balena Etcher uygulamasından indirdiğimiz Raspbian imajını seçip Flash işlemini başlatıyoruz ve bitmesini bekliyoruz(Bilgisayar ve SD Card özelliğine göre 2-7 dk arası sürebilir.). Flash işlemi bittikten sonra program otomatik kartımızı bilgisayardan çıkaracağı için SD Card okuyucumuzu sök-tak yapıyoruz. SD kartımızı bilgisayara tekrar taktıktan sonra disklerden boot olana giriyoruz ve diskin içine içi boş bir dosya oluşuturup ismini " ssh " koyuyoruz(Bu noktada dosyanın herhangi bir uzantıya sahip olmadığını kontrol edin.). Daha sonra " wpa_supplicant.conf "  dosyası oluşturuyoruz ve belirtilen kodları içine yazıyoruz.
´´´´
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
 ssid="WLAN isminiz."
 psk="WLAN şifreniz."
}
´´´´
* Kodları içine yazarken veya kopyalarken WLAN isminizi ve şifrenizi yazmayı unutmayın.
