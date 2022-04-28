const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversNew = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(array, string){
    return array.filter(function(el){
        return el.toLowerCase() == string.toLowerCase()
    })

    }

    findMatching(drivers, "bobby")

    function fuzzyMatch(array, string){
        return array.filter(function(el){
            return el.startsWith(string)
        })
    
        }
    
        fuzzyMatch(drivers, "b")

    function matchName(array, string){
        return array.filter(function(el){
            return el.name === string
        })
    }

    matchName(driversNew, "Bobby")