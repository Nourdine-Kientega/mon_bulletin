import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBarComponent = ({ state, descriptors, navigation }: BottomTabBarProps) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                borderRadius: 30,
                marginHorizontal: 40,
                marginBottom: 20,
                paddingVertical: 10,
                paddingHorizontal: 15,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 5 },
                elevation: 8,
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const iconName =
                    route.name === 'Home'
                        ? 'home-outline'
                        : route.name === 'Profile'
                            ? 'person-outline'
                            : 'settings-outline';

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {isFocused ? (
                            <View
                                style={{
                                    backgroundColor: 'gray',
                                    padding: 10,
                                    borderRadius: 25,
                                }}
                            >
                                <Ionicons name={iconName} size={28} color="white" />
                            </View>
                        ) : (
                            <>
                                <Ionicons name={iconName} size={26} color="gray" />
                                {typeof label === 'string' && (
                                    <Text style={{ fontSize: 12, color: 'gray' }}>{label}</Text>
                                )}
                            </>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
}

export default TabBarComponent;