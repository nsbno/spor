import { useCallback, useEffect, useRef } from "react";
import { Animated, LayoutChangeEvent } from "react-native";

export function useExpandAnimation(
  isExpanded: boolean,
  defaultExpanded?: boolean
) {
  const hasRenderedRef = useRef(false);
  const { currentBounds, setBounds } = useMutableBounds();
  const heightAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleLayoutChanges = useCallback(
    (event: LayoutChangeEvent) => {
      if (!hasRenderedRef.current && defaultExpanded) {
        heightAnim.setValue(event.nativeEvent.layout.height);
        opacityAnim.setValue(1);
      }
      hasRenderedRef.current = true;
      setBounds(event);
    },
    [heightAnim, opacityAnim, hasRenderedRef, setBounds, defaultExpanded]
  );

  useEffect(() => {
    if (currentBounds.height === 0) {
      return;
    }
    const heightAnimation = Animated.spring(heightAnim, {
      toValue: isExpanded ? currentBounds.height : 0,
      useNativeDriver: false,
      velocity: 1,
    });
    const opacityAnimation = Animated.timing(opacityAnim, {
      toValue: isExpanded ? 1 : 0,
      useNativeDriver: false,
      duration: isExpanded ? 100 : 250,
    });

    const sequence = isExpanded
      ? [heightAnimation, opacityAnimation]
      : [opacityAnimation, heightAnimation];

    const animation = Animated.stagger(250, sequence);
    animation.start();
    return () => animation.stop();
  }, [isExpanded, heightAnim, opacityAnim, currentBounds]);

  return { heightAnim, opacityAnim, handleLayoutChanges };
}

function useMutableBounds() {
  const bounds = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const setBounds = useCallback(
    (event: LayoutChangeEvent) => {
      bounds.current.x = event.nativeEvent.layout.x;
      bounds.current.y = event.nativeEvent.layout.y;
      bounds.current.width = event.nativeEvent.layout.width;
      bounds.current.height = event.nativeEvent.layout.height;
    },
    [bounds]
  );

  return { currentBounds: bounds.current, setBounds };
}
