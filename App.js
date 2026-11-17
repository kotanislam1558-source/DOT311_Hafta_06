import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import SayiTahminOyunu from './components/SayiTahminOyunu';
import KarakterFormu from './components/KarakterFormu';
import SavasEkrani from './components/SavasEkrani';
import CanliOnizleme from './components/CanliOnizleme';

export default function App() {
  const [aktifSekme, setAktifSekme] = useState('oyun'); // 'oyun', 'form', 'savas', 'onizleme'

  return (
    <SafeAreaView style={styles.guvenliAlan}>
      <StatusBar style="dark" />

      {/* Üst Sekme / Menü Çubuğu */}
      <View style={styles.sekmeCubugu}>
        <Pressable
          onPress={() => setAktifSekme('oyun')}
          style={[styles.sekmeButon, aktifSekme === 'oyun' && styles.aktifSekme]}
        >
          <Text style={[styles.sekmeMetin, aktifSekme === 'oyun' && styles.aktifSekmeMetin]}>
            🎲 Sayı Tahmin (Ödev)
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setAktifSekme('form')}
          style={[styles.sekmeButon, aktifSekme === 'form' && styles.aktifSekme]}
        >
          <Text style={[styles.sekmeMetin, aktifSekme === 'form' && styles.aktifSekmeMetin]}>
            📝 Form
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setAktifSekme('savas')}
          style={[styles.sekmeButon, aktifSekme === 'savas' && styles.aktifSekme]}
        >
          <Text style={[styles.sekmeMetin, aktifSekme === 'savas' && styles.aktifSekmeMetin]}>
            ⚔️ Savaş
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setAktifSekme('onizleme')}
          style={[styles.sekmeButon, aktifSekme === 'onizleme' && styles.aktifSekme]}
        >
          <Text style={[styles.sekmeMetin, aktifSekme === 'onizleme' && styles.aktifSekmeMetin]}>
            👤 Canlı
          </Text>
        </Pressable>
      </View>

      {/* Aktif Ekranın Gösterimi */}
      <View style={styles.icerikAlani}>
        {aktifSekme === 'oyun' && <SayiTahminOyunu />}
        {aktifSekme === 'form' && <KarakterFormu />}
        {aktifSekme === 'savas' && <SavasEkrani />}
        {aktifSekme === 'onizleme' && <CanliOnizleme />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  guvenliAlan: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  sekmeCubugu: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    gap: 6,
  },
  sekmeButon: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aktifSekme: {
    backgroundColor: '#2563eb',
  },
  sekmeMetin: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748b',
    textAlign: 'center',
  },
  aktifSekmeMetin: {
    color: '#ffffff',
  },
  icerikAlani: {
    flex: 1,
  },
});
