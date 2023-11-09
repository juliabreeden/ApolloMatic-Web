const MongoSchema = () => {
    return (
        <div>
            <label for="MongoSchema">Mongo Schema</label>
            <input type="text" id="MongoSchema" placeholder ="Input Mongo Schema here."></input>
            <button>Generate</button>
            {/* The div below is for error handling; an algorithm should be created to see if users are passing in a valid Mongo schema. */}
            <div></div>
        </div>
    )
};

export default MongoSchema; 