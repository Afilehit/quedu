import styled from 'styled-components/native';

//
export const Tab = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: #CCC;
    paddingLeft: 20px;
    paddingRight: 20px;
    background: ${props => props.background}
    
`;
export const Card = styled.View`
    width: 90%;
    padding: 15px;
    margin-top: 30px;
    background: white;
    border-width: 1px;
    border-color: #CCC;
    border-radius: 10px;
    shadowColor: #000;
    shadowOpacity: 0.30;
    shadowRadius: 4.65px;
    elevation: 8;
`;
export const Button = styled.TouchableOpacity`
    width: 20%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 10px;
`;
export const NameTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    flexWrap: wrap;
    padding-left: 10px;
`;
export const EduTitle = styled.Text`
    font-size: 16px;
    flex: 1;
    flexWrap: wrap;
    padding-left: 10px;
`;
export const DescTitle = styled.Text`
    font-size: 16px;
    flex: 1;
    flexWrap: wrap;
`;
export const SendQuery = styled.TouchableOpacity`
    width: 90%;
    border-width: 3px;
    border-radius: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
export const Add = styled.View`
    width: 70%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left-width: 4px;
    border-right-width: 4px;
    border-radius: 10px;
    border-left-color: #69C9D0;
    border-right-color: #EE1D52;
    background: #FFF;
`;