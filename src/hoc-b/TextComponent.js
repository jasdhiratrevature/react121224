import withFancyText from "./withFancyText"
const TextComponent = () => {
    return ( 
        <p>Hello Fancy</p>
     );
}
 
export default withFancyText(TextComponent);