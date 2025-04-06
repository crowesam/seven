export default function MealDetailsPage({ params }) {
    const { mealSlug } = params;

    return (
        <div>
            <h1>Meal Details</h1>
            <p>Details for meal: {mealSlug}</p>
        </div>
    );
}
// This page displays the details of a specific meal based on the slug provided in the URL.