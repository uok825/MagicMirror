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
*  Micro USB kablosu
*  VGA Kablosu
### Gereken yazılımlar
*  Gereken yazılım son sürüm [Raspbian](https://www.raspberrypi.org/downloads/raspberry-pi-os/) burada kullanacağınız Raspbian: Lite sürümü olmamalı, önerilen yazılımlar işimize yaramasa da yükleyip yüklememek size kalıyor. Ben burada "Raspberry Pi OS (32-bit) with desktop" Mayıs 2020 sürümünü kullandım.
*  Raspberry Zero için derlenmiş özel yükleme scripti:
  #### bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
*  Windows kullanıcısıysanız WinSCP ve Putty programlarını şiddetle öneriyorum, düzenleme ve kontrol açısından çok işimize yarıyorlar. [WinSCP](https://winscp.net/eng/downloads.php) - [Putty](https://winscp.net/eng/downloads.php#putty)
*  SD Card Formatter [Link](https://www.sdcard.org/downloads/formatter/)
*  Balena Etcher [Link](https://www.balena.io/etcher/)	
*  VNC Viewer [Link](https://www.realvnc.com/en/connect/download/viewer/)

## Raspberry Zero'nun hazırlanması
* Öncelikle SD Card okuyucumuza SD Cardımızı takıyoruz ve bilgisayara yerleştiriyoruz. SD Card Formatter uygulamasından kartımızı biçimlendiriyoruz. Daha sonra Balena Etcher uygulamasından indirdiğimiz Raspbian imajını seçip Flash işlemini başlatıyoruz ve bitmesini bekliyoruz(Bilgisayar ve SD Card özelliğine göre 2-7 dk arası sürebilir.). Flash işlemi bittikten sonra program otomatik kartımızı bilgisayardan çıkaracağı için SD Card okuyucumuzu sök-tak yapıyoruz. SD kartımızı bilgisayara tekrar taktıktan sonra disklerden boot olana giriyoruz ve diskin içine içi boş bir dosya oluşuturup ismini " ssh " koyuyoruz(Bu noktada dosyanın herhangi bir uzantıya sahip olmadığını kontrol edin.). Daha sonra " wpa_supplicant.conf "  dosyası oluşturuyoruz ve belirtilen kodları içine yazıyoruz.
````
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
 ssid="WLAN isminiz."
 psk="WLAN şifreniz."
}
````
* Kodları içine yazarken veya kopyalarken WLAN isminizi ve şifrenizi yazmayı unutmayın.
* Bu işlemleri tamamladıktan sonra SD kartımızı bilgisayardan söküp Raspi'ye takabilir ve gücünü verebiliriz. Bu aşamada ekran mevcut ise bağlayınız ve açılma aşamalarını kontrol edin(Zorunlu değil.). Açıldıktan sonra Raspimizin ip adresini öğrenelim bunu modem arayüzünüzden öğrenebilirsiniz. Bunun için internetten yardım alabilirsiniz. Raspimiz açıldı ve ip adresini öğrendiğimize göre şimdi gelelim nasıl bağlanacağımız kısmına bunun için Putty programını çalıştırıyoruz. Putty programı açıldıktan sonra " Hostname or IP adress " yazan kısma raspimizin ip adresini yazıp open diyoruz, bu işlemi sürekli tekrarlamak istemezseniz "Saved Session" kısmına bir isim yazıp sağ tarafından Save diyebilirsiniz. Terminalimiz açıldığı zaman bize kullanıcı adını soracaktır raspinin varsayılan kullanıcı adı " pi " şifresi ise " raspberry "dir. Bilgilerimizi girdikten sonra işlemler başarılı ise pi@ipadresi şeklinde terminalimiz açılacaktır. Bu kısımda VNC seçeneğini aktif etmek için terminale " sudo raspi-config " yazıyoruz ve enterliyoruz. Açılan ekranda Interfacing Options seçeğini seçiyoruz ve enterlıyoruz. Açılan ekrandan VNC seçeneğinin üstüne gelip enterlıyoruz ve bize sorulan soruya onay veriyoruz. Daha sonra tekrar terminal ekranına gelip " sudo reboot " komutunu yazarak raspiyi yeniden başlatıyoruz. Raspi açıldıktan sonra artık bilgisayarımızın masaüstüne uzaktan bağlanabilir ve kontrol edebiliriz şimdi gelin bunu test edelim. VNC Viewer programını çalıştırıyoruz, yukarıdaki " Enter a VNC Server adress or search " yerine IP adresimizi yazıp enterlıyoruz ve bize sorulan kullanıcı adı ve şifremizi giriyoruz " pi:raspberry ". Herhangi bir sorunla karşılaşmadıysanız karşınızda raspinin masaüstü! Şimdi gelin MagicMirroru kurmaya başlayalım.
### MagicMirror kurulumu
* Önceki adımları başarıyla tamamladıysanız sizi tebrik ediyorum ve gelin şimdi Ayna yazılımını kuralım.
* Bu aşamayı ister Putty terminali üzerinden isterseniz de VNC Viewer ile bağlanıp Raspi terminali üzerinden yapabilirsiniz fakat ben size Putty'i öneriyorum.
* Terminalimiz açıldığı zaman " sudo apt-get update && apt-get upgrade " komudunu uyguluyoruz ve son güncellemeleri yüklüyoruz(10dk kadar alabilir internet hızına göre.).
* Gereken yazılımlar kısmında belirtmiş olduğum bash komutunu kopyalıyoruz ve terminalimize yapıştırıyoruz. Putty programını kullanıyorsanız sağ tık ile yapıştırabilirsiniz. Enterladığımız anda yükleme işleminiz başlamış olacak ve bu işlem çok uzun sürebilecektir(20-40dk) bu yüzden eğer ki Putty kullanıyorsanız Putty programını kapatmamanız Raspi'yi ve bilgisayarınızı internetten kesmemeniz gerekmektedir.
