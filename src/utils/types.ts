
// Screen navigation types
export type RootStackParamList = {
    Welcome: undefined;
    BottomTabs: undefined;
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    Login: undefined;
    Signup: undefined;

    // add more screens here if needed
};

export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};