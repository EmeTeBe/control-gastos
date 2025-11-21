import { categories } from "../data/catagories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "add-filter-category",
      payload: { id: e.target.value },
    });
  };

  return (
    <div className="bg-white rounded-lg p-5 sm:p-10 shadow-lg">
      <form action="">
        <div className="flex flex-col items-center md:flex-row md:items-center sm:gap-5">
          <label htmlFor="category">Filtrar Gastos</label>
          <select
            name="category"
            id="category"
            className="items-center bg-slate-100 p-2 flex-1 rounded"
            onChange={handleChange}
          >
            <option value="">-- Todas las Categorias --</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
