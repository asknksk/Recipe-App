import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealTypes, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealTypes.map((meal, index) => {
            <option value={meal.toLowerCase()} key={index}>
              {meal}
            </option>;
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
