/*
  position prop can be one of 
  "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | 
  "center-bottom" | "right-center" | "right-top" | "right-bottom"
*/

type VerticalPostions = "top" | "center" | "bottom";
type HorizontalPosition = "right" | "center" | "left";
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPostions}`, "center-center">
    | "center";
};
export const Toast = ({ position }: ToastProps) => {
  return <div>Toast notification position {position}</div>;
};
