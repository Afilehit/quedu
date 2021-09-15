import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment, faHome, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import Svg_home from './icons/Svg_home';
import Svg_comment from './icons/Svg_comment';
import Svg_notification from './icons/Svg_notification';
import Svg_profile from './icons/Svg_profile';

import { Tab, Button, Title, Add } from './styles';
export default function BottomTabNavigator({ navigation, background, colorTitle, colorIcon, homeColorIcon, commentColorIcon, notificationColorIcon, profileColorIcon }) {
    if(!homeColorIcon){
        homeColorIcon = colorIcon;
    }
    if(!commentColorIcon){
        commentColorIcon = colorIcon;
    }
    if(!notificationColorIcon){
        notificationColorIcon = colorIcon;
    }
    if(!profileColorIcon){
        profileColorIcon = colorIcon;
    }
    return (
        <Tab background={background} style={{  }}>
            <Button onPress={() => navigation.navigate("Teachers")}>
                <Svg_home colorIcon={homeColorIcon} />
            </Button>
            <Button onPress={() => navigation.navigate("Chats")}>
                <Svg_comment colorIcon={commentColorIcon} />
            </Button>
            {/* <Button onPress={() => navigation.navigate("Photo")}>
                <Add>
                    <FontAwesomeIcon icon={faPlus} size={20} color="#010101" />
                </Add>
            </Button> */}
            <Button onPress={() => navigation.navigate("Notification")}>
                <Svg_notification colorIcon={notificationColorIcon} />
            </Button>
            <Button onPress={() => navigation.navigate("Profile")}>
                <Svg_profile colorIcon={profileColorIcon} />
            </Button>
        </Tab>
    )
}