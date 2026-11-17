import { StyleSheet, Text, View } from 'react-native';

export default function OyuncuKarti({ isim, puan, seviye = 1 }) {
  return (
    <View style={styles.kart}>
      <View style={styles.solKisim}>
        <View style={styles.avatarKutusu}>
          <Text style={styles.avatarHarf}>{isim ? isim.charAt(0).toUpperCase() : '?'}</Text>
        </View>
        <View style={styles.bilgiKutusu}>
          <Text style={styles.isim}>{isim}</Text>
          <View style={styles.seviyeRozet}>
            <Text style={styles.seviyeYazi}>⭐ Seviye {seviye}</Text>
          </View>
        </View>
      </View>

      <View style={styles.puanKutusu}>
        <Text style={styles.puanDeger}>{puan}</Text>
        <Text style={styles.puanEtiket}>Puan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kart: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#1a3a6b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e8edf5',
  },
  solKisim: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarKutusu: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2f6fed',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarHarf: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bilgiKutusu: {
    justifyContent: 'center',
  },
  isim: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1a253c',
    marginBottom: 4,
  },
  seviyeRozet: {
    backgroundColor: '#fff4cc',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  seviyeYazi: {
    fontSize: 12,
    fontWeight: '600',
    color: '#996500',
  },
  puanKutusu: {
    alignItems: 'flex-end',
  },
  puanDeger: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f6fed',
  },
  puanEtiket: {
    fontSize: 12,
    color: '#718096',
  },
});
