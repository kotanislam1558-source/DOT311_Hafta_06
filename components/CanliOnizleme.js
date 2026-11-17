import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from 'react-native';

export default function CanliOnizleme() {
  const [isim, setIsim] = useState('');
  const [buyukHarfOlsun, setBuyukHarfOlsun] = useState(false);

  // Kartta gösterilecek metin (boşsa varsayılan metin)
  const gorunenIsim = isim.length > 0
    ? (buyukHarfOlsun ? isim.toUpperCase() : isim)
    : 'Adsız Kahraman';

  return (
    <ScrollView contentContainerStyle={styles.kapsayici}>
      <View style={styles.baslikKutusu}>
        <Text style={styles.etiket}>UYGULAMA 1</Text>
        <Text style={styles.anaBaslik}>👤 Karakter Adı: Canlı Önizleme</Text>
        <Text style={styles.aciklama}>
          TextInput ve kontrollü girdi ile gerçek zamanlı veri bağlama, karakter sayacı ve canlı kart.
        </Text>
      </View>

      {/* Form Alanı */}
      <View style={styles.formKarti}>
        <Text style={styles.etiketYazi}>Karakterinin Adı (Maks. 12 Karakter)</Text>
        <TextInput
          value={isim}
          onChangeText={setIsim}
          placeholder="Örn: Gölge Avcısı"
          maxLength={12}
          style={styles.kutu}
        />

        {/* Karakter Sayacı (10 ve üzeri turuncu ve kalın) */}
        <Text style={[styles.sayac, isim.length >= 10 && styles.sayacUyari]}>
          {isim.length} / 12
        </Text>

        {/* Ekstra Kontroller: Temizle & Büyük Harf */}
        <View style={styles.butonSatiri}>
          <Pressable
            onPress={() => setIsim('')}
            style={({ pressed }) => [
              styles.kucukButon,
              styles.temizleButon,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text style={styles.temizleYazi}>🗑️ Temizle</Text>
          </Pressable>

          <Pressable
            onPress={() => setBuyukHarfOlsun(!buyukHarfOlsun)}
            style={({ pressed }) => [
              styles.kucukButon,
              buyukHarfOlsun ? styles.aktifAyarButon : styles.pasifAyarButon,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text
              style={[
                styles.ayarYazi,
                buyukHarfOlsun && styles.aktifAyarYazi,
              ]}
            >
              🔠 Büyük Harf: {buyukHarfOlsun ? 'Açık' : 'Kapalı'}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Canlı Karakter Kartı */}
      <View style={styles.kart}>
        <View style={styles.kartIkonCember}>
          <Text style={styles.kartIkon}>🛡️</Text>
        </View>
        <Text style={styles.kartIsim}>{gorunenIsim}</Text>
        <Text style={styles.kartAlt}>Seviye 1 · Çaylak</Text>
        <View style={styles.kartCizgi} />
        <Text style={styles.kartDurum}>
          {isim.length === 0 ? 'İsmini yazmaya başla...' : 'Karakter maceraya hazır!'}
        </Text>
      </View>

      <View style={styles.dipnotKutusu}>
        <Text style={styles.dipnotMetin}>
          ✅ 12 karakter sınırı (`maxLength`) uygulandı.{'\n'}
          ✅ 10 karakter ve üzerinde sayaç turuncuya dönüyor.{'\n'}
          ✅ "Temizle" ve "Büyük Harf (toUpperCase)" eklendi.
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
    color: '#0284c7',
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
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 18,
  },
  etiketYazi: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  kutu: {
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 17,
    color: '#0f172a',
  },
  sayac: {
    textAlign: 'right',
    marginTop: 8,
    color: '#64748b',
    fontSize: 13,
    fontWeight: '500',
  },
  sayacUyari: {
    color: '#ea580c',
    fontWeight: 'bold',
  },
  butonSatiri: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    gap: 10,
  },
  kucukButon: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temizleButon: {
    backgroundColor: '#fee2e2',
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  temizleYazi: {
    color: '#b91c1c',
    fontWeight: 'bold',
    fontSize: 13,
  },
  pasifAyarButon: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  aktifAyarButon: {
    backgroundColor: '#0284c7',
  },
  ayarYazi: {
    color: '#475569',
    fontWeight: 'bold',
    fontSize: 13,
  },
  aktifAyarYazi: {
    color: '#ffffff',
  },
  kart: {
    backgroundColor: '#1c2b45',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  kartIkonCember: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#273c60',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  kartIkon: {
    fontSize: 36,
  },
  kartIsim: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  kartAlt: {
    fontSize: 14,
    color: '#9fb6d4',
    marginTop: 4,
  },
  kartCizgi: {
    width: '80%',
    height: 1,
    backgroundColor: '#2e436a',
    marginVertical: 14,
  },
  kartDurum: {
    fontSize: 12,
    color: '#cbd5e1',
    fontStyle: 'italic',
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
