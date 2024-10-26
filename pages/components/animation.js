const astronaut = useSharedValue(-400);
useEffect(() => {
  astronaut.value = withSpring(0, {
    damping: 22,
    stiffness: 200,
  });
}, []);
const astronautStyle = useAnimatedStyle(() => {
  return {
    transform: [{ translateY: astronaut.value }],
  };
});

export * as Animation; 