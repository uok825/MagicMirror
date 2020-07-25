# MagicMirror
Raspberry Zero ile Akıllı Ayna yapımı ve yaparken karşılaştığım sorunlar.

## Gereken donanım,eşyalar ve fiyatları
  Raspberry Pi Zero Wireless(W veya WH) - 85₺ - (Link)[https://market.samm.com/raspberry-pi-zero-w]
  Monitör için Konya'da bulunan bilgisayarcılar çarşısına gittim ve esnafları gezerken ayağı kırık bir şekilde Samsung 19" monitör buldum. - 150₺
  Mini HDMI to VGA çevirici(Monitörünüz HDMI destekliyorsa Mini HDMI to HDMI kablosu alabilirsiniz.) - 35₺ - Esnafdan alındı aynı ürün (burada)[https://urun.n11.com/diger-bilgisayar-yedek-parcalari/mini-hdmi-to-vga-kablo-cevirici-donusturucu-hdmi-ses-destekli-bst-P219387924?gclsrc=aw.ds&&gclid=CjwKCAjwsO_4BRBBEiwAyagRTVnHPqpTWFgqWJqJPgQ0x-ZhH-cBtHG7TYB-0Lu3BZf1d-UIT6rNThoCp8YQAvD_BwE] da bulunuyor.
  5V 3A adaptör - 30₺ ama kuponla 10₺'ye aldım. - (Link)[https://www.trendyol.com/syrox/3-0-amper-sarj-aleti-p-5562839]
  Heatsink kullanmadım ama kullanmanızı kesinlikle öneriyorum. - (Örnek Link)[https://market.samm.com/raspberry-pi-sogutucu-set]
  PIR Sensör (Neden kullandığım aşşağıda mevcut.) - 10₺ - Esnafdan alındı aynı ürün (burada)[https://www.robotistan.com/hc-sr501-ayarlanabilir-ir-hareket-algilama-sensoru-pir] da mevcut.
  5V Röle Kartı (Neden kullandığım aşşağıda mevcut.) - 5₺ - Esnafdan alındı aynı ürün (burada)[https://www.robotistan.com/1-way-5v-relay-module-tekli-5v-role-karti] da mevcut.
  Çerçeve (100x60cm) - 75₺ - Marangozdan yaptırıldı.
  Reflekte Cam - 80₺ -  Camcıdan kestirildi, arkasına siyah araba filmi kapladım.
  
## Gereken yazılımlar
  Gereken yazılım son sürüm (Raspbian)[https://www.raspberrypi.org/downloads/raspberry-pi-os/] burada kullanacağınız Raspbian: Lite sürümü olmamalı, önerilen yazılımlar işimize yaramasa da yükleyip yüklememek size kalıyor. Ben burada "Raspberry Pi OS (32-bit) with desktop" Mayıs 2020 sürümünü kullandım.
  Raspberry Zero için derlenmiş özel yükleme scripti:
  # bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
  Windows kullanıcısıysanız WinSCP ve Putty programlarını şiddetle öneriyorum, düzenleme ve kontrol açısından çok işimize yarıyorlar. (WinSCP)[https://winscp.net/eng/downloads.php] - (Putty)[https://winscp.net/eng/downloads.php#putty]
  Mac hakkında bilgim yok.
  

  


