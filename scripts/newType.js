export const addType = () => {
    return `
    <div class="typeContainer"
        <form class="typeForm">
            <h2>Add A New Snack Type</h2>
            <label for="typeName">Type Name: </label>
            <input type="text" name="typeName" id="typeName">
            <button type="button" id="submit">Submit</button>
            <button type="button" id="cancel">Cancel</button>
        </form>
    </div>    
    `
}