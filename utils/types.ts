export type CustomButtonProps = {
  label: string;
  onPress: () => void;
  radius?: number;
  fontSize?: number;
  backgroundColor?: string;
  width?: string;
  margin?: number;
  padding?: number;
};
// Data of single BodyPart
export type BodyPart = {
  id?: number;
  name: string;
  image: string;
  equipment: string;
  bodyPart: string;
  target: string;
};