async function generateTeams() {
    const url = document.getElementById('matchUrl').value;
    
    // Step 1: Get player data
    const players = await fetchPlayers(url);
    
    // Step 2: Generate 20 teams
    const teams = [];
    for(let i=0; i<20; i++) {
        teams.push(createTeam(players));
    }
    
    // Step 3: Display results
    showResults(teams);
}

function createTeam(players) {
    // Your team creation logic here
    // (Use same rules as earlier: roles/budget/etc)
}

function showResults(teams) {
    // Display teams in table format
}
