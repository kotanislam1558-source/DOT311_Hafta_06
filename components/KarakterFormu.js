import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from 'react-native';

const siniflar = [
  { ad: 'Savaşçı', ikon: '⚔️' },
  { ad: 'Büyücü', ikon: '🧙' },
  { ad: 'Okçu', ikon: '🏹' },
  { ad: 'Şifacı', ikon: '🌿' }, // Kendin dene: 4. sınıf eklendi
];

export default function KarakterFormu() {
  const [isim, setIsim] = useState('');
  const [yas, setYas] = useState('');
  const [sinif, setSinif] = useState('');
  const [hata, setHata] = useState('');
  const [olusturuldu, setOlusturuldu] = useState(false);

  function olustur() {
    if (isim.trim() === '') {
      setHata('Lütfen bir ad yaz.');
      return;
    }
    if (isNaN(Number(yas)) || Number(yas) < 10 || Number(yas) > 99) {
      setHata('Yaş 10 ile 99 arasında bir sayı olmalı.');
      return;
    }
    if (sinif === '') {
      setHata('Lütfen bir sınıf seç.');
      return;
    }

    setHata('');
    setOlusturuldu(true);
  }

  function sifirla() {
    setIsim('');
    setYas('');
    setSinif('');
    setHata('');
    setOlusturuldu(false);
  }

  // Seçilen sınıfın simgesini bul
  const seciliSinifObj = siniflar.find((s) => s.ad === sinif);
  const sinifIkonu = seciliSinifObj ? seciliSinifObj.ikon : '⭐';

  // 4. Adım: Özet Kartı
  if (olusturuldu) {
    return (
      <ScrollView contentContainerStyle={styles.kapsayici}>
        <View style={styles.kartEkran}>
          <View style={styles.kart}>
            <Text style={styles.kartIkon}>{sinifIkonu}</Text>
            <Text style={styles.kartIsim}>{isim}</Text>
            <Text style={styles.kartBilgi}>
              {sinif} · {yas} yaşında
            </Text>
            <View style={styles.kartCizgi} />
            <Text style={styles.kartMacera}>Seviye 1 — Macera başlıyor! 🚀</Text>
          </View>

          <Pressable
            onPress={sifirla}
            style={({ pressed }) => [
              styles.olusturButon,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text style={styles.olusturYazi}>✨ YENİ KARAKTER OLUŞTUR</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  // Form Görünümü
  return (
    <ScrollView contentContainerStyle={styles.kapsayici}>
      <View style={styles.baslikKutusu}>
        <Text style={styles.etiket}>UYGULAMA 3</Text>
        <Text style={styles.anaBaslik}>📝 Karakter Oluşturma Formu</Text>
        <Text style={styles.aciklama}>
          Girdi doğrulaması (`trim`, `isNaN`, sayı aralığı), `map` ile sınıf seçimi ve koşullu render.
        </Text>
      </View>

      <View style={styles.formKarti}>
        <Text style={styles.etiketMetin}>Karakter Adı</Text>
        <TextInput
          value={isim}
          onChangeText={setIsim}
          placeholder="Kahramanının adını yaz"
          maxLength={16}
          style={styles.kutu}
        />

        <Text style={styles.etiketMetin}>Yaş (10 - 99 Arası)</Text>
        <TextInput
          value={yas}
          onChangeText={setYas}
          placeholder="Örn: 24"
          keyboardType="numeric"
          maxLength={3}
          style={styles.kutu}
        />

        <Text style={styles.etiketMetin}>Karakter Sınıfı Seç</Text>
        <View style={styles.secenekler}>
          {siniflar.map((s) => (
            <Pressable
              key={s.ad}
              onPress={() => setSinif(s.ad)}
              style={[
                styles.secenek,
                sinif === s.ad && styles.secili,
              ]}
            >
              <Text style={styles.secenekIkon}>{s.ikon}</Text>
              <Text
                style={[
                  styles.secenekYazi,
                  sinif === s.ad && styles.seciliYazi,
                ]}
              >
                {s.ad}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Hata Mesajı */}
        {hata !== '' && (
          <View style={styles.hataKutusu}>
            <Text style={styles.hata}>⚠️ {hata}</Text>
          </View>
        )}

        {/* Oluştur Butonu */}
        <Pressable
          onPress={olustur}
          style={({ pressed }) => [
            styles.olusturButon,
            pressed && { opacity: 0.7 },
          ]}
        >
          <Text style={styles.olusturYazi}>🛡️ KARAKTERİ OLUŞTUR</Text>
        </Pressable>
      </View>

      <View style={styles.dipnotKutusu}>
        <Text style={styles.dipnotMetin}>
          ✅ 4. sınıf olarak "Şifacı" seçeneği eklendi.{'\n'}
          ✅ Sınıflara özel simgeler bağlandı (⚔️, 🧙, 🏹, 🌿).{'\n'}
          ✅ Giriş doğrulamaları hatasız tamamlanınca özet kartı açılır.
        </Text>
      </View>
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
    color: '#059669',
    letterSpacing: 1,
  },
  anaBaslik: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 2,
  },
  aciklama: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  formKarti: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  etiketMetin: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
    marginTop: 10,
  },
  kutu: {
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#0f172a',
  },
  secenekler: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
  },
  secenek: {
    flex: 1,
    minWidth: '46%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    backgroundColor: '#f8fafc',
    gap: 8,
  },
  secili: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  secenekIkon: {
    fontSize: 18,
  },
  secenekYazi: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#334155',
    fontSize: 14,
  },
  seciliYazi: {
    color: '#ffffff',
  },
  hataKutusu: {
    backgroundColor: '#fee2e2',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  hata: {
    color: '#b91c1c',
    fontWeight: 'bold',
    fontSize: 13,
  },
  olusturButon: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  olusturYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  kartEkran: {
    alignItems: 'center',
  },
  kart: {
    width: '100%',
    backgroundColor: '#1c2b45',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  kartIkon: {
    fontSize: 48,
    marginBottom: 8,
  },
  kartIsim: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  kartBilgi: {
    color: '#9fb6d4',
    fontSize: 16,
    fontWeight: '500',
  },
  kartCizgi: {
    width: '80%',
    height: 1,
    backgroundColor: '#2e436a',
    marginVertical: 14,
  },
  kartMacera: {
    color: '#38bdf8',
    fontSize: 15,
    fontWeight: '600',
  },
  dipnotKutusu: {
    padding: 14,
    backgroundColor: '#ecfdf5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  dipnotMetin: {
    fontSize: 12,
    color: '#065f46',
    lineHeight: 18,
    fontWeight: '500',
  },
});
