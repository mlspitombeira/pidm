import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import Questao03 from "./Questao03";

function Questao01() {
  const img1 = "foto1.png";
  const img2 = "foto2.jpg";

  const [img, setImg] = useState(img1);

  const Trocar = () => {
    if (img === img1) {
      setImg(img2);
    } else {
      setImg(img1);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Aperte aqui" onPress={Trocar} />

      <Image
        id="imagem"
        source={{
          uri: img,
        }}
        style={{ height: 150, width: 150 }}
      />

      <Text style={{ fontWeight: "bold", fontSize: 50 }}>Maria Luisa Santos</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Limoeiro do Norte</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>Design Digital</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Oitavo Semestre</Text>
      <Questao03 cor="blue" />
    </View>
  );
}

export default Questao01;
