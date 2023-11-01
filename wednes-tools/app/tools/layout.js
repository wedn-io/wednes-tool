import Style from "./css/Tools.module.css";

export default function Layout(props){
  return (
    <>
      <form>
        <div className={Style.toolsBody}>
          <h2>Tools</h2>
          {props.children}
        </div>
      </form>
    </>
  );
}