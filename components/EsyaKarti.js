import { StyleSheet, Text, View } from 'react-native';

export default function EsyaKarti({ ad, tur, deger, nadirMi = false, ikon = '📦' }) {
  return (
    <View style={[styles.kart, nadirMi && styles.nadirKart]}>
      <View style={styles.solKisim}>
        <View style={[styles.ikonKutusu, nadirMi && styles.nadirIkonKutusu]}>
          <Text style={styles.ikon}>{ikon}</Text>
        </View>
        <View style={styles.bilgiKutusu}>
          <View style={styles.baslikSatiri}>
            <Text style={styles.ad}>{ad}</Text>
            {nadirMi && (
              <View style={styles.nadirRozeti}>
                <Text style={styles.nadirYazi}>EFSANEVİ</Text>
              </View>
            )}
          </View>
          <Text style={styles.tur}>Tür: {tur}</Text>
        </View>
      </View>

      <View style={styles.degerKutusu}>
        <Text style={styles.deger}>{deger}</Text>
        <Text style={styles.altin}>🪙 Altın</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kart: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e8edf5',
  },
  nadirKart: {
    borderColor: '#f59e0b',
    borderWidth: 1.5,
    backgroundColor: '#fffdf5',
  },
  solKisim: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ikonKutusu: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  nadirIkonKutusu: {
    backgroundColor: '#fef3c7',
  },
  ikon: {
    fontSize: 24,
  },
  bilgiKutusu: {
    flex: 1,
  },
  baslikSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 2,
  },
  ad: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  nadirRozeti: {
    backgroundColor: '#f59e0b',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  nadirYazi: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  tur: {
    fontSize: 13,
    color: '#64748b',
  },
  degerKutusu: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  deger: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b45309',
  },
  altin: {
    fontSize: 11,
    color: '#78350f',
    fontWeight: '500',
  },
});
