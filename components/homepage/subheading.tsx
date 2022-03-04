interface Props {
    name?: string;
}
const SubHeading = ({ name }: Props) => {
    return <h2>Hello {name}</h2>;
};
export default SubHeading;
