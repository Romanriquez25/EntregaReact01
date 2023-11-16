import Badge from "react-bootstrap/Badge";


const Tags = ({ razaDelPerrito, color }) => {
  return (
    <>
        <Badge pill bg={color}>
            {razaDelPerrito}
        </Badge>
    </>
  );
};

export default Tags;