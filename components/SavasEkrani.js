import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import OyunButonu from './OyunButonu';

export default function SavasEkrani() {
  const [mesaj, setMesaj] = useState('Bir hamle seç');
  const [mana, setMana] = useState(50);
  const [dusmanCan, setDusmanCan] = useState(100);

  function saldir() {
    const yeniCan = Math.max(0, dusmanCan - 10);
    setDusmanCan(yeniCan);
    setMesaj('⚔️ Düşmana saldırdın! (-10 Can)');
  }

  function savun() {
    setMesaj('🛡️ Savunmaya geçtin.');
  }

  function kalkanKaldir() {
    setMesaj('🛡️ Kalkanı kaldırdın! (Uzun basma ile tam savunma!)');
  }

  function buyuYap() {
    if (mana < 30) return;
    setMana((prev) => prev - 30);
    const yeniCan = Math.max(0, dusmanCan - 30);
    setDusmanCan(yeniCan);
    setMesaj('✨ Ateş topu fırlattın! (-30 Can, -30 Mana)');
  }

  function dinlen() {
    setMana((prev) => (prev + 20 > 100 ? 100 : prev + 20));
    setMesaj('🌿 Biraz dinlendin (+20 Mana)');
  }

  function yenidenBaslat() {
    setDusmanCan(100);
    setMana(50);
    setMesaj('Yeni savaş başladı! Bir hamle seç.');
  }

  const zafer = dusmanCan <= 0;

  return (
    <ScrollView contentContainerStyle={styles.kapsayici}>
      <View style={styles.baslikKutusu}>
        <Text style={styles.etiket}>UYGULAMA 2</Text>
        <Text style={styles.anaBaslik}>⚔️ Savaş Arenası</Text>
        <Text style={styles.aciklama}>
          Özel `OyunButonu` bileşeni, props ile olay yönetimi, disabled ve onLongPress deneyimi.
        </Text>
      </View>

      {/* Savaş Alanı Kartı */}
      <View style={styles.arenaKarti}>
        {/* Düşman Durumu */}
        <View style={styles.dusmanKutusu}>
          <Text style={styles.dusmanAvatar}>👹</Text>
          <Text style={styles.dusmanAdi}>Karanlık Muhafız</Text>
          <View style={styles.barCerceve}>
            <View style={[styles.canBari, { width: `${dusmanCan}%` }]} />
          </View>
          <Text style={styles.canMetin}>Düşman Canı: {dusmanCan} / 100</Text>
        </View>

        {/* Bilgilendirme Mesajı */}
        <View style={styles.mesajAlani}>
          <Text style={styles.mesajMetin}>{mesaj}</Text>
        </View>

        {/* Karakter Mana Durumu */}
        <View style={styles.manaKutusu}>
          <Text style={styles.manaYazisi}>💧 Mana: {mana} / 100</Text>
          <View style={styles.barCerceve}>
            <View style={[styles.manaBari, { width: `${mana}%` }]} />
          </View>
        </View>

        {/* Butonlar veya Zafer Ekranı */}
        {!zafer ? (
          <View style={styles.butonlarAlani}>
            <OyunButonu
              baslik="⚔️ Saldır (-10 Can)"
              renk="#c9372c"
              onPress={saldir}
            />

            <OyunButonu
              baslik="🛡️ Savun (Uzun Bas: Kalkan Kaldır)"
              renk="#2f6fed"
              onPress={savun}
              onLongPress={kalkanKaldir}
            />

            <OyunButonu
              baslik={`✨ Ateş Büyüsü (30 Mana) ${mana < 30 ? '— Yetersiz Mana' : ''}`}
              renk="#7b4fd6"
              pasif={mana < 30}
              onPress={buyuYap}
            />

            <OyunButonu
              baslik="🌿 Dinlen (+20 Mana)"
              renk="#22a06b"
              onPress={dinlen}
            />
          </View>
        ) : (
          <View style={styles.zaferKutusu}>
            <Text style={styles.zaferKupa}>🏆</Text>
            <Text style={styles.zaferBaslik}>ZAFER!</Text>
            <Text style={styles.zaferAciklama}>Karanlık Muhafız mağlup edildi!</Text>
            <Pressable
              onPress={yenidenBaslat}
              style={styles.yenidenButon}
            >
              <Text style={styles.yenidenYazi}>🔄 Yeni Savaş Başlat</Text>
            </Pressable>
          </View>
        )}
      </View>

      <View style={styles.dipnotKutusu}>
        <Text style={styles.dipnotMetin}>
          ✅ Savun butonuna uzun basarak (`onLongPress`) kalkan kaldırabilirsiniz.{'\n'}
          ✅ Mana 30'un altına indiğinde Büyü butonu otomatik pasifleşir (`disabled`).{'\n'}
          ✅ Düşman canı bittiğinde Zafer ekranı açılır.
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
    color: '#c9372c',
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
  arenaKarti: {
    backgroundColor: '#14213d',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  dusmanKutusu: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dusmanAvatar: {
    fontSize: 48,
    marginBottom: 4,
  },
  dusmanAdi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  barCerceve: {
    width: '100%',
    height: 12,
    backgroundColor: '#1f2e4d',
    borderRadius: 6,
    overflow: 'hidden',
  },
  canBari: {
    height: '100%',
    backgroundColor: '#ef4444',
    borderRadius: 6,
  },
  canMetin: {
    fontSize: 12,
    color: '#cbd5e1',
    marginTop: 6,
    fontWeight: '600',
  },
  mesajAlani: {
    backgroundColor: '#1f2e4d',
    padding: 14,
    borderRadius: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#2e436a',
  },
  mesajMetin: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  manaKutusu: {
    marginBottom: 18,
  },
  manaYazisi: {
    color: '#93c5fd',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  manaBari: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 6,
  },
  butonlarAlani: {
    marginTop: 6,
  },
  zaferKutusu: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  zaferKupa: {
    fontSize: 54,
    marginBottom: 8,
  },
  zaferBaslik: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4ade80',
    marginBottom: 4,
  },
  zaferAciklama: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 16,
  },
  yenidenButon: {
    backgroundColor: '#16a34a',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  yenidenYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
