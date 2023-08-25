import { View, Text } from "react-native";

const Questao03 = ({ cor }) => {
  return (
    <View>
      <Text style={{fontSize: 20, color: cor}}>Direçao de arte</Text>
      <Text style={{ fontSize: 20, color: cor }}>Semiotica</Text>
      <Text style={{ fontSize: 20, color: cor }}>Tipografia</Text>
      <Text style={{fontSize: 20, color: cor }}>Comunicaçao visual</Text>
    </View>
  );
};

export default Questao03;