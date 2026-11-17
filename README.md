# DOT311 — 6. Hafta: Kullanıcı Girdisi, Olaylar ve Sayı Tahmin Oyunu

Bu proje, DOT311 Mobil Uygulama Geliştirme dersinin 6. hafta konusu olan **Kullanıcı Girdisi (TextInput), Pressable, Olaylar ve Form Doğrulama** ile haftalık ana ödev olan **Sayı Tahmin Oyunu**'nu içerir.

Proje, tüm uygulamaları ve ödevi mobilde tek dokunuşla kolayca test edebilmeniz için üst kısımda şık bir sekme menüsü (Tab Bar) ile donatılmıştır.

---

## 📌 İçerilen Uygulamalar ve Haftalık Ödev

### 1. 🎲 Sayı Tahmin Oyunu (Haftanın Ana Ödevi)
- 1 ile 100 arasında rastgele gizli sayı üretimi (`Math.floor(Math.random() * 100) + 1`).
- Sayısal klavye (`keyboardType="numeric"`) ile tahmin alma ve her tahminde kutuyu temizleme.
- Yönlendirici ipuçları: `"Daha büyük! ⬆️"`, `"Daha küçük! ⬇️"`, `"Tebrikler Bildin! 🎉"`.
- Geçersiz giriş kontrolü (boş bırakma veya 1-100 aralığı dışındaki değerler için hata mesajı).
- Hamle/deneme sayacı ve adım adım tahmin geçmişi listesi.
- Oyun bittiğinde tebrik ekranı ve "🔄 Yeniden Oyna" butonu ile yeni gizli sayı üreterek sıfırlama.

### 2. 📝 Karakter Oluşturma Formu (Uygulama 3)
- Ad (`maxLength={16}`) ve Yaş (`keyboardType="numeric"`, `maxLength={3}`) giriş kutuları.
- 4. sınıf olarak "Şifacı" eklenmiş sınıf listesi (`map` ile buton seçimi).
- Sınıflara özel simgeler (⚔️ Savaşçı, 🧙 Büyücü, 🏹 Okçu, 🌿 Şifacı).
- Hata doğrulama (`trim()`, `isNaN`, 10-99 yaş aralığı kontrolü).
- Başarılı oluşturmada özet kartına geçiş ve "Yeni Karakter" butonuyla sıfırlama.

### 3. ⚔️ Savaş Arenası (Uygulama 2)
- Özel `OyunButonu` bileşeni (`onPress`, `onLongPress`, `pasif`).
- Saldır (-10 düşman canı), Savun (uzun basışta kalkan kaldırma).
- Büyü (-30 can, -30 mana) ve mana 30'un altına düşünce otomatik pasifleşen/soluklaşan buton (`disabled`).
- Dinlen (+20 mana) ve düşman canı 0 olduğunda açılan "Zafer!" ekranı.

### 4. 👤 Karakter Adı Canlı Önizleme (Uygulama 1)
- 12 karakter sınırı, 10 karakterden sonra turuncuya dönen canlı karakter sayacı.
- Canlı karakter kartı (`isim.length > 0 ? isim : 'Adsız Kahraman'`).
- "Temizle" ve "Büyük Harf (toUpperCase)" butonları.

---

## 🚀 WebStorm ile Çalıştırma

1. **WebStorm'da Açma:**
   - WebStorm'u açın.
   - `File -> Open...` seçeneğinden masaüstündeki `DOT311_Hafta_06` klasörünü seçip açın.

2. **Projeyi Başlatma:**
   - WebStorm Terminalinde (`Alt + F12`):
     ```bash
     npm start
     # veya
     npx expo start
     ```

---

## 📱 Expo Go ile Mobilde Test Etme

1. Telefonunuzdaki **Expo Go** uygulamasını açın.
2. Bilgisayar ile telefonun **aynı Wi-Fi ağına** bağlı olduğunu doğrulayın.
3. Terminaldeki QR kodu telefonunuzla taratın.
4. Üstteki sekme butonlarını kullanarak **Sayı Tahmin Oyunu**, **Form**, **Savaş** ve **Canlı Önizleme** ekranları arasında geçiş yapabilirsiniz.

---

## 🌐 GitHub'a Yükleme

Terminalde sırasıyla:
```bash
git init
git add .
git commit -m "DOT311 6. Hafta: Sayi Tahmin Oyunu, Form ve Savas Arenasi tamamlandi"
git branch -M main
git remote add origin <GITHUB_REPO_URL_ADRESINIZ>
git push -u origin main
```
