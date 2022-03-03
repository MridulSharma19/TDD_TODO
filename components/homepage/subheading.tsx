interface Props {
    name?: string;
}
const SubHeading = ({ name }: Props) => {
    return <h3>Hello {name}</h3>;
};
export default SubHeading;
