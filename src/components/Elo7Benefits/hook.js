import qualidadeImg from "../../assets/qualidade.png";
import descontracaoImg from "../../assets/descontracao.png";
import atividadesImg from "../../assets/atividades.png";

export const useBenefits = () => ({
  benefits: [
    {
      name: "Qualidade de vida",
      picture: qualidadeImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum,",
    },
    {
      name: "Ambiente descontraído",
      picture: descontracaoImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis lacinia in, vehicula ut turpis.",
    },
    {
      name: "Atividades extras",
      picture: atividadesImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus,",
    },
  ],
});
