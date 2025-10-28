import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export const ProductSkeleton = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  const opacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7]
  });

  return (
    <View style={styles.skeletonCard}>
      <Animated.View style={[styles.skeletonImage, { opacity }]} />
      <View style={styles.skeletonContent}>
        <Animated.View style={[styles.skeletonTitle, { opacity }]} />
        <Animated.View style={[styles.skeletonSubtitle, { opacity }]} />
        <Animated.View style={[styles.skeletonPrice, { opacity }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 5,
    overflow: 'hidden',
    elevation: 2,
  },
  skeletonImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#e0e0e0',
  },
  skeletonContent: {
    padding: 12,
  },
  skeletonTitle: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  skeletonSubtitle: {
    height: 12,
    width: '60%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 10,
  },
  skeletonPrice: {
    height: 20,
    width: '40%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  }
});