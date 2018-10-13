if(process.argv.length==2){
	console.log('USAGE: node search [EXT] [TEXT]');
	process.exit(-1);
}


let args = process.argv.slice(2)
let typeOfFile = args[0]
let searchString = args[1]


console.log('typeOfFile:',typeOfFile)
console.log('searchString:',searchString)


const PATH = process.cwd()
const fs = require('fs')
const filesArray = fs.readdirSync(PATH)
console.log("filesArray:",filesArray)
 
var found = false;

filesArray.forEach((file) => {
	
	
    if(file.split('.').pop() == typeOfFile){
		

        fs.readFile(file, 'utf8', (err, data) => {
			
			
        if (err) {
            throw err;
        }
		
		
        if(data.includes(searchString)){
			
            console.log('Found! Full path: ', PATH+'\\'+file ); 
            found=true; 
			
			
			
        
		}
		
		
		
		
		
		
        }
		
		
		
		);
		
		
    }
	
}

)
