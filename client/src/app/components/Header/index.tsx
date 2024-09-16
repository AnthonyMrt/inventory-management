type HeaderProps = {
  name: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Header = ({ name }: HeaderProps) => {
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};

export default Header;
