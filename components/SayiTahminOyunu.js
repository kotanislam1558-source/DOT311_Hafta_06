import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from 'react-native';

export default function SayiTahminOyunu() {
  const [gizli, setGizli] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [tahmin, setTahmin] = useState('');
  const [mesaj, setMesaj] = useState('1 ile 100 arasında bir sayı tuttum. Tahmin et!');
  const [mesajTuru, setMesajTuru] = useState('bilgi'); // 'bilgi', 'hata', 'buyuk', 'kucuk', 'bildin'
  const [denemeSayisi, setDenemeSayisi] = useState(0);
  const [oyunBitti, setOyunBitti] = useState(false);
  const [tahminGecmisi, setTahminGecmisi] = useState([]);

  function tahminEt() {
    if (oyunBitti) return;

    const sayi = Number(tahmin.trim());

    // Geçersiz giriş kontrolü (boş ya da 1-100 dışı)
    if (!tahmin.trim() || isNaN(sayi) || sayi < 1 || sayi > 100) {
      setMesaj('⚠️ Lütfen 1 ile 100 arasında geçerli bir sayı giriniz!');
      setMesajTuru('hata');
      return;
    }

    const yeniDeneme = denemeSayisi + 1;
    setDenemeSayisi(yeniDeneme);

    if (sayi < gizli) {
      setMesaj(`⬆️ ${sayi}'den Daha büyük!`);
      setMesajTuru('buyuk');
      setTahminGecmisi((prev) => [{ id: yeniDeneme, sayi, sonuc: 'Daha büyük ⬆️' }, ...prev]);
    } else if (sayi > gizli) {
      setMesaj(`⬇️ ${sayi}'den Daha küçük!`);
      setMesajTuru('kucuk');
      setTahminGecmisi((prev) => [{ id: yeniDeneme, sayi, sonuc: 'Daha küçük ⬇️' }, ...prev]);
    } else {
      setMesaj(`🎉 Tebrikler Bildin! Gizli sayı ${gizli}.`);
      setMesajTuru('bildin');
      setTahminGecmisi((prev) => [{ id: yeniDeneme, sayi, sonuc: 'Doğru Tahmin! 🎯' }, ...prev]);
      setOyunBitti(true);
    }

    // Her tahminden sonra kutuyu temizle
    setTahmin('');
  }

  function yenidenOyna() {
    setGizli(Math.floor(Math.random() * 100) + 1);
    setTahmin('');
    setMesaj('Yeni bir sayı tuttum! 1 ile 100 arasında bir sayı tahmin et.');
    setMesajTuru('bilgi');
    setDenemeSayisi(0);
    setOyunBitti(false);
    setTahminGecmisi([]);
  }

  return (
    <ScrollView contentContainerStyle={styles.kapsayici}>
      <View style={styles.baslikKutusu}>
        <Text style={styles.etiket}>HAFTALIK ÖDEV</Text>
        <Text style={styles.anaBaslik}>🎲 Sayı Tahmin Oyunu</Text>
        <Text style={styles.aciklama}>
          1 ile 100 arasında rastgele belirlenen gizli sayıyı en az hamlede bulmaya çalış!
        </Text>
      </View>

      {/* Mesaj Kutusu */}
      <View
        style={[
          styles.mesajKutusu,
          mesajTuru === 'hata' && styles.mesajHata,
          mesajTuru === 'buyuk' && styles.mesajBuyuk,
          mesajTuru === 'kucuk' && styles.mesajKucuk,
          mesajTuru === 'bildin' && styles.mesajBildin,
        ]}
      >
        <Text
          style={[
            styles.mesajYazisi,
            mesajTuru === 'hata' && styles.yaziHata,
            mesajTuru === 'bildin' && styles.yaziBildin,
          ]}
        >
          {mesaj}
        </Text>
      </View>

      {/* Deneme Sayacı */}
      <View style={styles.sayacKutusu}>
        <Text style={styles.sayacMetin}>
          Toplam Hamle: <Text style={styles.sayacVurgu}>{denemeSayisi}</Text>
        </Text>
      </View>

      {/* Giriş Alanı veya Yeniden Oyna Butonu */}
      {!oyunBitti ? (
        <View style={styles.formKutusu}>
          <Text style={styles.girdiEtiket}>Tahmininizi Yazın (1 - 100):</Text>
          <TextInput
            value={tahmin}
            onChangeText={setTahmin}
            placeholder="Örn: 42"
            keyboardType="numeric"
            maxLength={3}
            onSubmitEditing={tahminEt}
            style={styles.girdiKutusu}
          />

          <Pressable
            onPress={tahminEt}
            style={({ pressed }) => [
              styles.tahminButon,
              pressed && { opacity: 0.75, transform: [{ scale: 0.98 }] },
            ]}
          >
            <Text style={styles.tahminButonYazi}>🎯 TAHMİN ET</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.tebrikKutusu}>
          <Text style={styles.tebrikKupa}>🏆</Text>
          <Text style={styles.tebrikBaslik}>Harika İş Çıkardın!</Text>
          <Text style={styles.tebrikDetay}>
            Gizli sayı <Text style={styles.bold}>{gizli}</Text> idi. Toplam{' '}
            <Text style={styles.bold}>{denemeSayisi}</Text> tahminde sonuca ulaştın.
          </Text>

          <Pressable
            onPress={yenidenOyna}
            style={({ pressed }) => [
              styles.yenidenButon,
              pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
            ]}
          >
            <Text style={styles.yenidenButonYazi}>🔄 Yeniden Oyna</Text>
          </Pressable>
        </View>
      )}

      {/* Tahmin Geçmişi */}
      {tahminGecmisi.length > 0 && (
        <View style={styles.gecmisKutusu}>
          <Text style={styles.gecmisBaslik}>📜 Tahmin Geçmişi</Text>
          {tahminGecmisi.map((item) => (
            <View key={item.id} style={styles.gecmisSatir}>
              <Text style={styles.gecmisSira}>#{item.id}</Text>
              <Text style={styles.gecmisSayi}>Tahmin: {item.sayi}</Text>
              <Text style={styles.gecmisSonuc}>{item.sonuc}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  kapsayici: {
    padding: 18,
    paddingBottom: 40,
  },
  baslikKutusu: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  etiket: {
    fontSize: 11,
    fontWeight: '800',
    color: '#8b5cf6',
    letterSpacing: 1,
  },
  anaBaslik: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 2,
  },
  aciklama: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 18,
  },
  mesajKutusu: {
    backgroundColor: '#f1f5f9',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    alignItems: 'center',
  },
  mesajHata: {
    backgroundColor: '#fee2e2',
    borderColor: '#fca5a5',
  },
  mesajBuyuk: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  mesajKucuk: {
    backgroundColor: '#fffbeb',
    borderColor: '#fde68a',
  },
  mesajBildin: {
    backgroundColor: '#dcfce7',
    borderColor: '#86efac',
  },
  mesajYazisi: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },
  yaziHata: {
    color: '#b91c1c',
  },
  yaziBildin: {
    color: '#15803d',
    fontSize: 17,
  },
  sayacKutusu: {
    alignItems: 'center',
    marginBottom: 16,
  },
  sayacMetin: {
    fontSize: 14,
    color: '#475569',
  },
  sayacVurgu: {
    fontWeight: 'bold',
    color: '#2563eb',
    fontSize: 16,
  },
  formKutusu: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  girdiEtiket: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  girdiKutusu: {
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 14,
  },
  tahminButon: {
    backgroundColor: '#7c3aed',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  tahminButonYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tebrikKutusu: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#86efac',
    marginBottom: 16,
  },
  tebrikKupa: {
    fontSize: 48,
    marginBottom: 8,
  },
  tebrikBaslik: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: 6,
  },
  tebrikDetay: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
  },
  bold: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  yenidenButon: {
    backgroundColor: '#16a34a',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  yenidenButonYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gecmisKutusu: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  gecmisBaslik: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  gecmisSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  gecmisSira: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: 'bold',
    width: 32,
  },
  gecmisSayi: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  gecmisSonuc: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
  },
});
