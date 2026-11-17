import { StyleSheet, Text, Pressable } from 'react-native';

export default function OyunButonu({ baslik, renk = '#2563eb', onPress, onLongPress, pasif = false }) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={pasif}
      style={({ pressed }) => [
        styles.buton,
        { backgroundColor: renk },
        pressed && styles.basili,
        pasif && styles.pasif,
      ]}
    >
      <Text style={[styles.butonYazi, pasif && styles.pasifYazi]}>{baslik}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  basili: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  pasif: {
    opacity: 0.35,
    backgroundColor: '#64748b',
    elevation: 0,
    shadowOpacity: 0,
  },
  butonYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pasifYazi: {
    color: '#cbd5e1',
  },
});
