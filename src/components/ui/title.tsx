import style from './title.module.scss';

type TitleProps = {
  title: string;
  color: "white" | "colored";
};

export function Title({ title, color = "colored" }: TitleProps) {
  return (<h1 className={`${style.title} ${style[color]}`}><span></span> {title}</h1>);
}