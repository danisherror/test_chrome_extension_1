const topics = {
    "Data Structures": 0,
    "Algorithms": 0,
    "Arrays": 0,
    "Mathematical": 0,
    "String": 0,
    "Dynamic Programming": 0,
    "Tree": 0,
    "Sorting": 0,
    "Hash": 0,
    "Bit Magic": 0,
    "Matrix": 0,
    "Graph": 0,
    "Linked List": 0,
    "Greedy": 0,
    "Stack": 0,
    "Searching": 0,
    "Recursion": 0,
    "Binary Search Tree": 0,
    "STL": 0,
    "CPP": 0,
    "Prime Number": 0,
    "Binary Search": 0,
    "DFS": 0,
    "Java": 0,
    "Numbers": 0,
    "Misc": 0,
    "two-pointer-algorithm": 0,
    "number-theory": 0,
    "BFS": 0,
    "Backtracking": 0,
    "Queue": 0,
    "Map": 0,
    "Heap": 0,
    "Modular Arithmetic": 0,
    "sieve": 0,
    "series": 0,
    "sliding-window": 0,
    "Advanced Data Structure": 0,
    "Combinatorial": 0,
    "Divide and Conquer": 0,
    "palindrome": 0,
    "pattern-printing": 0,
    "Trie": 0,
    "Geometric": 0,
    "Fibonacci": 0,
    "permutation": 0,
    "logical-thinking": 0,
    "OOP": 0,
    "Java-Collections": 0,
    "prefix-sum": 0,
    "Design-Pattern": 0,
    "Traversal": 0,
    "Binary Representayion": 0,
    "set": 0,
    "factorial": 0,
    "Segment-Tree": 0,
    "Pattern Searching": 0,
    "implementation": 0,
    "Game Theory": 0,
    "Shortest Path": 0,
    "doubly-linked-list": 0,
    "priority-queue": 0,
    "Operators": 0,
    "modular arithmetic": 0,
    "circular-linked-list": 0,
    "Division": 0,
    "Class": 0,
    "subset": 0,
    "union-find": 0,
    "Disjoint Set": 0,
    "Regular Expression": 0,
    "Merge Sort": 0,
    "cpp-strings": 0,
    "constructive algo": 0,
    "Data Type": 0,
    "cpp-operator": 0,
    "Java-Control-Flow": 0,
    "Java-BigInteger": 0,
    "Kadane": 0,
    "Date-Time": 0,
    "Java-Strings": 0,
    "Puzzles": 0,
    "Factorization": 0,
    "Functions": 0,
    "CPP-Control-Flow": 0,
    "cpp-pointers": 0,
    "circular linked list": 0,
    "Sqrt Decomposition": 0,
    "Pointers": 0,
    "anagram": 0,
    "Practice-Problems": 0,
    "Java-Operators": 0,
    "Java-Class and Object": 0,
    "AVL-Tree": 0,
    "Machine Learning": 0,
    "Reverse": 0,
    "alphabets": 0,
    "Qunatifiers": 0,
    "LCS": 0
}



const companies = {
    "Amazon": 0,
    "Microsoft": 0,
    "Flipkart": 0,
    "Adobe": 0,
    "Google": 0,
    "Samsung": 0,
    "Accolite": 0,
    "MakeMyTrip": 0,
    "Snapdeal": 0,
    "Zoho": 0,
    "Paytm": 0,
    "Walmart": 0,
    "Goldman Sachs": 0,
    "Morgan Stanley": 0,
    "OYO Rooms": 0,
    "FactSet": 0,
    "D-E-Shaw": 0,
    "Ola Cabs": 0,
    "Oracle": 0,
    "MAQ Software": 0,
    "Facebook": 0,
    "SAP Labs": 0,
    "VMWare": 0,
    "Hike": 0,
    "Qualcomm": 0,
    "Cisco": 0,
    "Intuit": 0,
    "Visa": 0,
    "Directi": 0,
    "Linkedin": 0,
    "Yahoo": 0,
    "Payu": 0,
    "Wipro": 0,
    "BankBazaar": 0,
    "Synopsys": 0,
    "Citrix": 0,
    "Salesforce": 0,
    "Codenation": 0,
    "PayPal": 0,
    "24*7 Innovation Labs": 0,
    "TCS": 0,
    "Twitter": 0,
    "InMobi": 0,
    "Yatra.com": 0,
    "Housing.com": 0,
    "Atlassian": 0,
    "GE": 0,
    "Bloomberg": 0,
    "Oxigen Wallet": 0,
    "Swiggy": 0,
    "Nagarro": 0,
    "Media.net": 0,
    "Nutanix": 0,
    "Teradata": 0,
    "Accenture": 0,
    "Grofers": 0,
    "Apple": 0,
    "Myntra": 0,
    "CouponDunia": 0,
    "One97": 0,
    "Amdocs": 0,
    "Belzabar": 0,
    "InfoEdge": 0,
    "Rockstand": 0,
    "Expedia": 0,
    "Boomerang Commerce": 0,
    "Kritikal Solutions": 0,
    "Drishti-Soft": 0,
    "Times Internet": 0,
    "Infosys": 0,
    "Quikr": 0,
    "Veritas": 0,
    "Juniper Networks": 0,
    "Epic Systems": 0,
    "United Health Group": 0,
    "Opera": 0,
    "Uber": 0,
    "BrowserStack": 0,
    "IBM": 0,
    "Gropuon": 0,
    "GreyOrange": 0,
    "Xome": 0,
    "Sapient": 0,
    "Zillious": 0,
    "ABCO": 0,
    "Airtel": 0,
    "Sprinklr": 0,
    "Cognizant": 0,
    "Moonfrog Labs": 0,
    "Kuliza": 0,
    "Jabong": 0,
    "Netskope": 0,
    "Brocade": 0,
    "Arcesium": 0,
    "Nvidia": 0,
    "OATS Systems": 0,
    "HSBC": 0,
    "Fab.com": 0,
    "Informatica": 0,
    "Junglee Games": 0,
    "Taxi4Sure": 0,
    "Pubmatic": 0,
    "CarWale": 0,
    "Polycom": 0,
    "Philips": 0,
    "Dunzo": 0,
    "Medlife": 0,
    "TinyOwl": 0,
    "National Instruments": 0,
    "JUSPAY": 0,
    "Tejas Network": 0,
    "Mahindra Comviva": 0,
    "Monotype Solutions": 0,
    "nearbuy": 0,
    "Tesco": 0,
    "IgniteWorld": 0,
    "Dell": 0,
    "Target Corporation": 0,
    "Citicorp": 0,
    "Streamoid Technologies": 0,
    "Komi Media": 0,
    "DE Shaw": 0,
    "PropTiger": 0,
    "Knowlarity": 0,
    "KLA Tencor": 0,
    "Zomato": 0,
    "Huawei": 0,
    "Wooker": 0,
    "Cadence India": 0,
    "Open Solutions": 0,
    "Service Now": 0,
    "HunanAsset": 0,
    "Dailyhunt": 0,
    "HCL": 0,
    "Intel": 0,
    "CGI": 0,
    "Lybrate": 0,
    "Zopper": 0,
    "Code Brew": 0,
    "Zycus": 0,
    "Unisys": 0,
    "Vizury Interactive Solutions": 0,
    "Bidgely": 0,
    "Infinera": 0,
    "Motlay": 0,
    "PlaySimple": 0,
    "redBus": 0,
    "eBay": 0,
    "FreeCharge": 0,
    "American Express": 0,
    "Cavisson System": 0,
    "Yodlee Infotech": 0,
    "MeyLife": 0,
    "Mobicip": 0,
    "Freshokartz": 0,
}



const dataset_hard = {
    "Merge Without Extra Space": {
        "company": [
            'Zoho',
            'Microsoft',
            'Snapdeal',
            'Goldman Sachs',
            'Adobe',
            'Linkedin',
            'Amdocs',
            'Brocade',
            'Juniper Networks',
            'Quikr',
            'Synopsys'
        ],

        "tag": ['Mathematical', 'Sorting', 'Algorithms']
    },

    "Next Happy Number": {
        "company": [],
        "tag": ['Recursion', 'Algorithms'],
    },
    "Min Time": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Algorithms']
    },
    "Median of the Subarrays": {
        "company": ['Sprinklr'],
        "tag": ['Sorting', 'Map', 'Algorithms']
    },
    "Greater or Less": {
        "company": ['MakeMyTrip'],
        "tag": ['Segment-Tree', 'Advanced Data Structure']
    },
    "Partition the Array": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Binary Search', 'Algorithms']
    },
    "Cake Distribution Problem": {
        "company": [],
        "tag": ['Binary Search', 'Arrays']
    },
    "Game Of Subsets": {
        "company": [],
        "tag": ['Dynamic Programming', 'Bit Magic', 'Algorithms']
    },
    "Count Binary Strings With No Consecutive 1s": {
        "company": ['Swiggy'],
        "tag": ['number-theory', 'Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Minimum BST Sum Subtree": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Algorithms']
    },
    "Minimum Cost to Merge Stones": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Special Digits": {
        "company": [],
        "tag": ['Combinatorial', 'Mathematical']
    },
    "Divide in Incremental Groups": {
        "company": ['Expedia'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Maximum Number of coins": {
        "company": ['MakeMyTrip'],
        "tag": ['Dynamic Programming', 'Matrix', 'Algorithms']
    },
    "Max min Height": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Binary Search', 'Algorithms']
    },
    "Avoid Explosion": {
        "company": [],
        "tag": ['Graph', 'Disjoint Set']
    },
    "Walls Coloring II": {
        "company": [],
        "tag": ['Dynamic Programming']
    },
    "Shortest Path Using Atmost One Curved Edge": {
        "company": ['Uber'],
        "tag": ['Graph', 'Shortest Path', 'Algorithms']
    },
    "Candy": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Divide and Conquer', 'Algorithms']
    },
    "Burst Balloons": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Algorithms']
    },
    "Count Lucky Permutations": {
        "company": ['Intuit'],
        "tag": ['Dynamic Programming', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Count the Substring": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Largest Sum Cycle": {
        "company": ['JUSPAY'],
        "tag": ['Graph', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Maximum Number of Toys": {
        "company": ['Google'],
        "tag": ['Data Structures']
    },
    "Select Nodes": {
        "company": ['Flipkart'],
        "tag": [
            'Dynamic Programming',
            'DFS',
            'Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Fixing Two swapped nodes of a BST": {
        "company": ['Paytm', 'Amazon', 'Microsoft', 'FactSet', 'Walmart', 'BankBazaar'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Scrambled String": {
        "company": ['Nutanix'],
        "tag": [
            'Strings',
            'Recursion',
            'Divide and Conquer',
            'Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Better String": {
        "company": [],
        "tag":
            [
                'Strings',
                'Dynamic Programming',
                'Recursion',
                'Data Structures',
                'Algorithms'
            ]
    },
    "Chocolates Pickup": {
        "company": [],
        "tag": ['Dynamic Programming']
    },
    "Possible Paths": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Split Array Largest Sum": {
        "company": ['Google'],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Find the String": {
        "company": ['Google'],
        "tag": ['Strings', 'Graph', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Minimum characters to be added at front to make string palindrome": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Rearrange the array": {
        "company": ['Flipkart'],
        "tag": ['DFS', 'Prime Number', 'LCS', 'Algorithms']
    },
    "Largest rectangular sub-matrix whose sum is 0": {
        "company": [],
        "tag": [
            'prefix-sum',
            'Hash',
            'Dynamic Programming',
            'Matrix',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum time to fulfil all orders": {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Check if all levels of two trees are anagrams or not": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Geek in a Maze": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Array Partition": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Segment-Tree',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Check if all levels of two trees are anagrams or not": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Geek in a Maze": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Array Partition": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Segment-Tree',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Corona Vaccine": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Elixir of Life": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Secret Cipher": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Kth Smallest Number in Multiplication Table": {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Shortest Range In BST": {
        "company": [],
        "tag": [
            'two-pointer-algorithm',
            'Binary Search Tree',
            'Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "IPL 2021 - Match Day 6 - Semi Final": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Articulation Point - I": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Articulation Point - II": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Count the number of subarrays": {
        "company": [],
        "tag": ['sliding-window', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Find number of closed islands": {
        "company": ['Google'],
        "tag": [
            'DFS',
            'Matrix',
            'Graph',
            'BFS',
            'union-find',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Shortest Path by Removing K walls": {
        "company": ['Google'],
        "tag": ['Matrix', 'BFS', 'Data Structures', 'Algorithms']
    },
    "IPL 2021 - Final": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "132 Geeky Buildings": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Data Structures']
    },
    "Distribute candies in a binary tree": {
        "company": ['Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Shortest Unique prefix for every word": {
        "company": ['Microsoft', 'Google'],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Reverse a sublist of a linked list": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Longest Increasing Path in a Matrix": {
        "company": ['D-E-Shaw'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Word Ladder II": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Adobe', 'Google'],
        "tag": ['Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Minimum operations to convert array A to B": {
        "company": ['Google', 'Codenation'],
        "tag": [
            'Arrays',
            'Hash',
            'Dynamic Programming',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Count occurrences of a given word in a 2-d array": {
        "company": ['Paytm', 'Google'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Number of distinct words with K maximum contiguous vowels": {
        "company": ['Adobe'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Critical Connections": {
        "company": ['Amazon'],
        "tag": ['Graph', 'Data Structures']
    },
    "Palindrome Pairs": {
        "company": ['Flipkart', 'Amazon'],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Word Break (Trie)": {
        "company": [
            'Zoho',
            'Amazon',
            'Microsoft',
            'Hike',
            'Walmart',
            'MAQ Software',
            'Google',
            'IBM'
        ],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Find duplicate rows in a binary matrix": {
        "company": ['Microsoft'],
        "tag": ['Matrix', 'Trie', 'Data Structures', 'Advanced Data Structure']
    },
    'Number of subsets with product less than k': {
        "company": ['Morgan Stanley', 'Amazon'],
        "tag": ['Arrays', 'subset', 'Data Structures']
    },
    'Longest substring to form a Palindrome': {
        "company": ['Amazon', 'Samsung'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Sorted Link List to BST": {
        "company": ['Flipkart', 'Amazon', 'Google'],
        "tag": ['Linked List', 'Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Minimum X (xor) A": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Burning Tree": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Adobe'],
        "tag": ['Tree', 'BFS', 'Data Structures', 'Algorithms']
    },
    "The Painter's Partition Problem-II": {
        "company": ['Microsoft', 'Google', 'Codenation'],
        "tag": [
            'Searching',
            'Dynamic Programming',
            'Divide and Conquer',
            'Binary Search',
            'Algorithms'
        ]
    },
    "Word Ladder I": {
        "company": ['Flipkart', 'Amazon', 'Adobe', 'Google'],
        "tag": ['Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Median of 2 Sorted Arrays of Different Sizes": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'Google'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Find all possible palindromic partitions of a String": {
        "company": ['Amazon', 'Microsoft', 'Facebook'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Recursion',
            'Backtracking',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Longest valid Parentheses": {
        "company": ['Microsoft', 'Google'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Stack',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Smallest Positive Integer that can not be represented as Sum": {
        "company": [],
        "tag": [
            'Arrays',
            'Mathematical',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Maximum of minimum for every window size": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": ['sliding-window', 'Stack', 'Data Structures', 'Algorithms']
    },
    "Maximum Rectangular Area in a Histogram": {
        "company": ['Microsoft', 'Google'],
        "tag": ['Stack', 'Data Structures']
    },
    "Max Circular Subarray Sum": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Strongly connected component (Tarjans's Algo)": {
        "company": ['Amazon'],
        "tag": ['Graph', 'Data Structures']
    },
    'Nth Natural Number': {
        "company": ['Google'],
        "tag": ['Mathematical', 'Algorithms']
    },
    'Check Tree Traversal': {
        "company": [],
        "tag": ['Recursion', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Allocate minimum number of pages": {
        "company": ['Infosys', 'Amazon', 'Microsoft', 'Google', 'Codenation'],
        "tag": ['Searching', 'Divide and Conquer', 'Algorithms']
    },

    "Minimum Cost Path": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'MakeMyTrip', 'Goldman Sachs'],
        "tag": ['Greedy', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Hexadecimal to decimal counter": {
        "company": [],
        "tag": ['permutation', 'Modular Arithmetic', 'factorial', 'Algorithms']
    },
    "Smallest window in a string containing all the characters of another string": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'MakeMyTrip',
            'Google',
            'Streamoid Technologies',
            'Media.net',
            'Atlassian'
        ],
        "tag": [
            'sliding-window',
            'Hash',
            'Strings',
            'Dynamic Programming',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Joey doesn't share food": {
        "company": [],
        "tag": ['Hash', 'DFS', 'Data Structures', 'Algorithms']
    },
    "Nth digit of pi": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Generalised Fibonacci numbers": {
        "company": [],
        "tag": [
            'Mathematical',
            'Matrix',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum number of elements": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "nCr mod M | Part 1": {
        "company": [],
        "tag": ['Combinatorial', 'Modular Arithmetic', 'Algorithms']
    },
    "Kill Captain America": {
        "company": [],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Assignment Problem": {
        "company": ['Google'],
        "tag": ['Graph', 'Data Structures']
    },
    "Closest Palindrome": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Minimum number to make median X": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Adventure in a Maze": {
        "company": [],
        "tag": ['Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Rohan's Love for Matrix": {
        "company": [],
        "tag": ['Mathematical', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Boolean Parenthesization": {
        "company": ['Amazon', 'Microsoft', 'Intuit', 'Linkedin'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Print all LCS sequences": {
        "company": [],
        "tag": ['Dynamic Programming', 'Backtracking', 'Algorithms']
    },
    "Find the Maximum Flow": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Queries on a Matrix": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Mathematical',
            'Matrix',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Number Formation": {
        "company": ['Goldman Sachs'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Doctor Strange": {
        "company": [],
        "tag": ['Arrays', 'DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "AVL Tree Deletion": {
        "company": [
            'Morgan Stanley',
            'Amazon',
            'Snapdeal',
            'MakeMyTrip',
            'Oracle',
            'Oxigen Wallet'
        ],
        "tag": ['Tree', 'AVL-Tree', 'Data Structures', 'Advanced Data Structure']
    },
    "AVL Tree Insertion": {
        "company": [
            'Morgan Stanley',
            'Amazon',
            'Snapdeal',
            'MakeMyTrip',
            'Oracle',
            'Oxigen Wallet',
            'Informatica',
            'Citicorp'
        ],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Longest Palindromic Substring in Linear Time": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Travelling Salesman Problem": {
        "company": ['Microsoft', 'Samsung', 'Google', 'Opera'],
        "tag": []
    },
    "Next Optimal Move in Tic Tac Toe": {
        "company": ['Accolite'],
        "tag": ['Misc']
    },
    "Create your own Calculator": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Distinct palindromic substrings": {
        "company": ['MakeMyTrip', 'Ola Cabs', 'SAP Labs', 'Linkedin'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'palindrome',
            'STL',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Longest Zig-Zag Sub Sequence": {
        "company": ['Accolite'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find minimum s-t cut in a flow network": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Optimal binary search tree": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Binary Search Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Smallest range in K lists": {
        "company": ['Flipkart', 'Amazon'],
        "tag": ['Arrays', 'Heap', 'Data Structures']
    },
    "Convex Hull": {
        "company": ['Morgan Stanley', 'Samsung', 'Ola Cabs', 'Goldman Sachs', 'Adobe'],
        "tag": ['Mathematical', 'Divide and Conquer', 'Geometric', 'Algorithms']
    },
    "Word Wrap": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum Profit": {
        "company": ['Accolite', 'Amazon', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Interesting Queries": {
        "company": [],
        "tag": ['Map', 'Sqrt Decomposition', 'Data Structures']
    },
    "Akku and Arrays": {
        "company": [],
        "tag": ['Segment-Tree', 'Advanced Data Structure']
    },
    "Find the pattern": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Maximum subset XOR": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    'Bike Racing': {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Largest rectangle of 1s with swapping of columns allowed": {
        "company": [],
        "tag": ['Arrays', 'Matrix', 'Data Structures']
    },
    "Phone directory": {
        "company": ['Amazon', 'Microsoft', 'Snapdeal'],
        "tag": ['Map', 'Trie', 'Data Structures', 'Advanced Data Structure']
    },
    'Longest Path in a matrix': {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Points in Straight Line": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Let's Play!!!": {
        "company": ['Zoho', 'Amazon'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Palindromic Partitioning": {
        "company": ['Amazon', 'Microsoft', 'Google'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Wildcard string matching": {
        "company": ['Amazon', 'Ola Cabs'],
        "tag": ['Strings', 'Data Structures']
    },
    "Strictly Increasing Array": {
        "company": ['Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Partition array to K subsets": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Backtracking', 'Algorithms']
    },
    "Nodes at given distance in binary tree": {
        "company": [
            'Flipkart',
            'Accolite',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Hike',
            'Ola Cabs',
            'Walmart',
            'Goldman Sachs'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Alien Dictionary": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'OYO Rooms', 'Walmart', 'Google'],
        "tag": ['Strings', 'Sorting', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Fixing Two nodes of a BST": {
        "company": ['Amazon', 'Microsoft', 'FactSet', 'Walmart', 'BankBazaar'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Clone a linked list with next and random pointer": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Amazon', 'Microsoft',
            'OYO Rooms', 'Snapdeal',
            'D-E-Shaw', 'MakeMyTrip',
            'Ola Cabs', 'Walmart',
            'Adobe', 'BankBazaar'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Number of Turns in Binary Tree": {
        "company": ['Amazon', 'Samsung'],
        "tag": ['Tree', 'Data Structures']
    },
    "Max  rectangle": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'MakeMyTrip',
            'Directi',
            'Intuit',
            'Google'
        ],
        "tag": [
            'Dynamic Programming',
            'Stack',
            'Matrix',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Merge two BST 's": {
        "company": ['Amazon', 'Microsoft', 'Google'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Wildcard Pattern Matching": {
        "company": [
            'Zoho',
            'Amazon',
            'Microsoft',
            'Ola Cabs',
            'Walmart',
            'Google',
            'InMobi',
            'United Health Group'
        ],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Word Break - Part 2": {
        "company": ['Google', 'IBM'],
        "tag": ['Dynamic Programming', 'Recursion', 'Backtracking', 'Algorithms']
    },
    "Reorder List": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms', 'Intuit'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Minimum sum partition": {
        "company": ['Amazon', 'Samsung'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum Points To Reach Destination": {
        "company": ['Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Numbers with one absolute difference": {
        "company": ['Jabong'],
        "tag": ['Strings', 'Numbers', 'Data Structures']
    },
    "Bit Difference": {
        "company": ['Microsoft', 'Google'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Return two prime numbers": {
        "company": ['Zoho', 'Yahoo'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Binary Tree  to DLL": {
        "company": [
            'Morgan Stanley',
            'Accolite',
            'Amazon',
            'Microsoft',
            'Snapdeal',
            'Goldman Sachs',
            'Salesforce'
        ],
        "tag": ['Linked List', 'Tree', 'Data Structures']
    },
    'N-Queen Problem': {
        "company": [
            'Accolite',
            'Amazon',
            'Microsoft',
            'D-E-Shaw',
            'Visa',
            'MAQ Software',
            'Amdocs',
            'Twitter'
        ],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Number of distinct subsequences": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Count Smaller elements": {
        "company": ['Google', 'Codenation'],
        "tag": [
            'Arrays',
            'Sorting',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    'Subtraction in Linked List': {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Maximum Path Sum between 2 Special Nodes": {
        "company": [
            'Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'FactSet',
            'Directi',
            'Facebook'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    'Brackets in Matrix Chain Multiplication': {
        "company": ['Microsoft'],
        "tag": ['Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Matrix Chain Multiplication": {
        "company": ['Flipkart', 'Microsoft', 'FactSet'],
        "tag": ['Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms']
    },
    'Find median in a stream': {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Amazon', 'Microsoft',
            'Samsung', 'D-E-Shaw',
            'Ola Cabs', 'Oracle',
            'Intuit', 'Adobe',
            'Google', 'SAP Labs',
            'Facebook', 'Yahoo',
            'Belzabar', 'Apple'
        ],
        "tag": ['Heap', 'Design-Pattern', 'Data Structures']
    },
    "Next Smallest Palindrome": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Adobe',
            'Media.net'
        ],
        "tag": ['Arrays', 'Data Structures']
    },
    'Solve the Sudoku': {
        "company": [
            'Zoho', 'Flipkart',
            'Amazon', 'Microsoft',
            'MakeMyTrip', 'Ola Cabs',
            'Oracle', 'MAQ Software',
            'Directi', 'PayPal'
        ],
        "tag": ['Matrix', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "String Permutations": {
        "company": [
            'Accolite',
            'Amazon',
            'OYO Rooms',
            'Samsung',
            'Citrix',
            'MAQ Software',
            'Cisco'
        ],
        "tag": ['Strings', 'Recursion', 'Data Structures', 'Algorithms']
    },


}


const dataset_school = {

    "C++ Strings": {
        "company": [],
        "tag": ['Strings', 'CPP', 'Data Structures']
    },
    "Java Hello World": {
        "company": [],
        "tag": ['Java']
    },
    "Sum of Digit is Pallindrome or not": {
        "company": ['Snapdeal'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of Array Elements": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Average in a stream": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Sum of Series": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Program to print reciprocal of letters": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Print 1 To N Without Loop": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Java Abstract keyword": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Java Basic Data Types": {
        "company": [],
        "tag": ['Java', 'Data Type']
    },
    "Java Inheritance": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Java Classes Introduction": {
        "company": [],
        "tag": ['Java', 'OOP', 'Class']
    },
    "Java Override": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Java Substring": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Convert String to LowerCase": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Java Operators(Relational) | Set - 2": {
        "company": [],
        "tag": ['Java']
    },
    "Delete alternate characters": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Reverse a String": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Java Switch Case statement": {
        "company": [],
        "tag": ['Java']
    },
    "Java Input/Output": {
        "company": [],
        "tag": ['Java']
    },
    "C++ 2-D Arrays | Set-1": {
        "company": [],
        "tag": ['Arrays', 'CPP', 'Data Structures']
    },
    "Palindromic Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Print alternate elements of an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Power of Pow | Odd Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "C++ Input / Output": {
        "company": [],
        "tag": ['CPP', 'Operators', 'OOP']
    },
    "Java Strings | Set 1": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Determine focal length of a spherical mirror": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Power of Pow | Even Number": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Convert a list of characters into a String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "The dice problem": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of odd and even elements": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Remove vowels from string": {
        "company": ['GE'],
        "tag": ['Strings', 'Data Structures']
    },
    "Find n-th term of series 1, 3, 6, 10, 15, 21": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count Digits": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Count type of Characters": {
        "company": ['Amazon', 'MakeMyTrip'],
        "tag": ['Strings', 'Data Structures']
    },
    "Check String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Java loops | Set 1": {
        "company": [],
        "tag": ['Java']
    },
    "C++ Data Types": {
        "company": [],
        "tag": ['CPP', 'Data Type']
    },
    "if-else (Decision Making)": {
        "company": [],
        "tag": ['Java']
    },
    "Find Index": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "C++ Switch Case Statement": {
        "company": [],
        "tag": ['CPP']
    },
    "Floyd's triangle": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "C++ Operators (Relational) | Set 2": {
        "company": [],
        "tag": ['CPP', 'Operators']
    },
    "GCD of two numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Addition of two square matrices": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "C++ Array (print an element) | Set 2": {
        "company": [],
        "tag": ['Arrays', 'CPP', 'Data Structures']
    },
    "Arrays (Sum of array)": {
        "company": [],
        "tag": ['Arrays', 'CPP', 'Data Structures']
    },
    "C++ if-else (Decision Making)": {
        "company": [],
        "tag": ['CPP']
    },
    "Display longest name": {
        "company": [],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "C++ Operators | Set 1 (Arithmetic)": {
        "company": [],
        "tag": ['Mathematical', 'CPP', 'Algorithms']
    },
    "Print the left element": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Distance between 2 points": {
        "company": ['Zoho'],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Sum of elements in a matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Reversing the vowels": {
        "company": ['Zoho', 'Flipkart'],
        "tag": ['Strings', 'Data Structures']
    },
    "Compete the skills": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Combinational Logic": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Mean": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count of camel case characters": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Multiply Array": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Parallel or Perpendicular?": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Perfect Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Diagonal sum": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Find the median": {
        "company": ['Accolite', 'Amazon', 'Samsung', 'FactSet'],
        "tag": ['Mathematical', 'Divide and Conquer', 'Algorithms']
    },
    "Number of divisors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Lower case to upper case": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Remainder Evaluation": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "12 hour clock Multiplication": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "12 hour clock subtraction": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "12 hour clock addition": {
        "company": [],
        "tag": ['Mathematical', 'modular arithmetic', 'Algorithms']
    },
    "Pattern of Strings": {
        "company": [],
        "tag": ['Strings', 'pattern-printing', 'Data Structures']
    },
    "Triangle shrinking downwards": {
        "company": [],
        "tag": ['Strings', 'pattern-printing', 'Data Structures']
    },
    "Palindrome": {
        "company": ['Zoho', 'Samsung', 'Oracle', 'Adobe'],
        "tag": ['palindrome']
    },
    "Binary representation": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Reverse digits": {
        "company": ['MAQ Software'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Pattern Printing": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Number Pattern": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Remove characters from alphanumeric string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of AP series": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Java Arrays | Set 1": {
        "company": [],
        "tag": ['Arrays', 'Java', 'Data Structures']
    },
    "Compound Interest": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Upper case conversion": {
        "company": ['Nagarro'],
        "tag": ['Strings', 'Data Structures']
    },
    "nPr": {
        "company": [],
        "tag": ['Mathematical', 'permutation', 'Algorithms']
    },
    "Sum Palindrome": {
        "company": ['Zoho'],
        "tag": ['Mathematical', 'palindrome', 'Algorithms']
    },
    "Print  1 to n without using loops": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Surface Area and Volume of Cuboid": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of GP": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of an AP": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Multiplication Table": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Print Elements of Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Simple Interest": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Vowel or Not": {
        "company": [],
        "tag": ['CPP', 'Java']
    },
    "Swap two numbers": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Addition of Two Numbers": {
        "company": [],
        "tag": ['Mathematical', 'CPP', 'Algorithms']
    },
    "Greatest of three numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Small Factorial": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },

    "Party of Couples": {
        "company": ['Ola Cabs'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "C++ Functions (Sum of numbers) | Set 1": {
        "company": [],
        "tag": ['CPP', 'Functions']
    },
    "Odd or Even": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Toeplitz matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Print the pattern | Set-1": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Replace all 0's with 5": {
        "company": ['Amazon'],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Check for Binary": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "C++ Pointers ( Incrementing a variable) | Set 1": {
        "company": [],
        "tag": ['CPP', 'Pointers']
    },
    "Full Prime": {
        "company": [],
        "tag": ['Prime Number']
    },
    "Multiply Matrices": {
        "company": ['Paytm'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Maximum and Minimum Of Array Elements": {
        "company": ['VMWare'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum Of Digits": {
        "company": [],
        "tag": ['number-theory']
    },
    "Sum of Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Armstrong Numbers": {
        "company": ['VMWare', 'Oracle'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Automorphic Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Value equal to index value": {
        "company": ['Flipkart', 'Amazon', 'FactSet', 'Hike'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Fascinating Number": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Series AP": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Remove Spaces": {
        "company": ['SAP Labs'],
        "tag": ['Strings', 'Data Structures']
    },
    "Cube root of a number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Swap kth elements": {
        "company": ['Morgan Stanley', 'Rockstand'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Decimal to any base conversion": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Split Strings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Count of smaller elements": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Extract the integers": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Strings', 'Data Structures', 'Algorithms']
    },
    "Even Odd Sum": {
        "company": [],
        "tag": ['Traversal', 'Algorithms']
    },
    "Front-Back Transformation - copy": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Check if two given circles touch each other": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Perfect Arrays": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    }
}

const dataset_basic = {
    "Queue Reversal": {
        "company": ['Amazon'],
        "tag": ['Stack', 'Queue', 'Data Structures']
    },
    "Pattern for Reverse Character Bridge": {
        "company": [['Flipkart']],
        "tag": ['Graph', 'Data Structures']
    },
    "Java Operators(Arithmetic) | Set 1": {
        "company": [],
        "tag": ['Mathematical', 'Java', 'Algorithms']
    },
    "C++ Basic Data types": {
        "company": [],
        "tag": ['Strings', 'CPP', 'Data Type', 'Data Structures']
    },
    "First and last occurrences of X": {
        "company": ['Amazon', 'Microsoft'],
        "tag": [
            'Arrays',
            'Searching',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Find N-th term in the series": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Pairs of prime number": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Binary Array Sorting": {
        "company": ['Paytm', 'Accolite', 'Intuit', 'InfoEdge'],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Gray to Binary equivalent": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Check if strings are rotations of each other or not": {
        "company": ['Oracle', 'Adobe'],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of upper and lower triangles": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Number is sparse or not": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Searching an element in a sorted array": {
        "company": ['Paytm'],
        "tag": ['Searching', 'Binary Search', 'Algorithms']
    },
    "Remove common characters and concatenate": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Power of 2": {
        "company": ['Adobe'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Decimal to binary": {
        "company": ['Adobe'],
        "tag": ['Practice-Problems', 'Bit Magic', 'Data Structures']
    },
    "Sum of diagonals": {
        "company": [],
        "tag": ['Practice-Problems']
    },
    "Print Matrix in snake Pattern": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Maximum Occuring Character": {
        "company": ['Flipkart'],
        "tag": ['Strings', 'Data Structures']
    },
    "": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Bit Difference": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Reverse a String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "C++ Hello World": {
        "company": [],
        "tag": ['CPP']
    },
    "Sum of numbers in string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Print first n Fibonacci Numbers": {
        "company": ['Infosys', 'Wipro', 'TCS', 'Accenture'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Check if two arrays are equal or not": {
        "company": ['Goldman Sachs'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Keypad typing": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Check if a string is Isogram or not": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "K largest elements": {
        "company": ['Amazon', 'Microsoft', 'Walmart', 'Adobe'],
        "tag": ['Heap', 'Data Structures']
    },
    "Union of two arrays": {
        "company": ['Zoho', 'Rockstand'],
        "tag": ['Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Binary String": {
        "company": ['Flipkart', 'Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Extended Euclidean Algorithm": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum Array Puzzle": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Reverse array in groups": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Parties and seats": {
        "company": [],
        "tag": ['Map', 'Data Structures']
    },
    "Start Coding": {
        "company": [],
        "tag": ['CPP']
    },
    "Java Generic Class": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Java Collections | Set 8 (TreeSet)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Java Interface": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Java Collections | Set 9 (Queue)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Map Operations": {
        "company": [],
        "tag": ['Map', 'STL', 'Data Structures']
    },
    "Sort and Reverse Vector": {
        "company": [],
        "tag": ['STL']
    },
    "Front to Back": {
        "company": [],
        "tag": ['STL']
    },
    "C++ Call by reference": {
        "company": [],
        "tag": ['Misc', 'CPP']
    },
    "Queue Push & Pop": {
        "company": [],
        "tag": ['Queue', 'Data Structures']
    },
    "Java Date and Day": {
        "company": [],
        "tag": ['Strings', 'Java', 'Date-Time', 'Data Structures']
    },
    "Magical Number": {
        "company": [],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Java Collection | Set 3 (HashMap) Part-1": {
        "company": ['Paytm'],
        "tag": ['Java', 'Java-Collections']
    },
    "Stack designer": {
        "company": [],
        "tag": ['Stack', 'STL', 'Data Structures']
    },
    "Java 1-d and 2-d Array": {
        "company": [],
        "tag": ['Arrays', 'Java', 'Data Structures']
    },
    "Java Iterator": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "Anagram Strings": {
        "company": [],
        "tag": ['Strings', 'Java', 'Data Structures']
    },
    "Java Collection | Set 1 (ArrayList) Part-1": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "The Spider Steps": {
        "company": [],
        "tag": ['Greedy', 'logical-thinking', 'Algorithms']
    },
    "Sum the common elements": {
        "company": [],
        "tag": ['set']
    },
    "String Reversal": {
        "company": ['Samsung'],
        "tag": ['Hash', 'Strings', 'Map', 'Data Structures']
    },
    "Product of array elements": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Logical Operators": {
        "company": [],
        "tag": ['cpp-operator']
    },
    "Average Count Array": {
        "company": [],
        "tag": [
            'Arrays',
            'Mathematical',
            'logical-thinking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "C++ Classes Introduction": {
        "company": [],
        "tag": ['CPP', 'OOP', 'Class']
    },
    "Greater on right side": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Height of Heap": {
        "company": [],
        "tag": ['Tree', 'Heap', 'Data Structures']
    },
    "Fibonacci to N": {
        "company": ['Bloomberg'],
        "tag": ['Misc', 'Fibonacci']
    },
    "Doctors Clinic": {
        "company": [],
        "tag": ['Mathematical', 'logical-thinking', 'Algorithms']
    },
    "C++ | A Speed Breaker": {
        "company": [],
        "tag": ['CPP', 'Operators', 'Data Type']
    },
    "How Many X's?": {
        "company": ['Amazon'],
        "tag": ['Numbers', 'Modular Arithmetic', 'Algorithms']
    },
    "Find The Sequence": {
        "company": [],
        "tag": ['Mathematical', 'series', 'logical-thinking', 'Algorithms']
    },
    "Print an array in Pendulum Arrangement": {
        "company": ['FactSet'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Prime number validation-JAVA regex": {
        "company": [],
        "tag": ['Java', 'Regular Expression']
    },
    "Weight of strings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "The Modulo Task": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Pattern-1": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Mrs. S- JAVA Bits Set 1": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Countries at war": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Remove repeated digits in a given number": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Jumpy Ball": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "G.F Series": {
        "company": [],
        "tag": ['Mathematical', 'Recursion', 'Algorithms']
    },
    "Perfect Square String": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Trimorphic Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Snake Case": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Product of maximum in first array and minimum in second": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Modulus of two double numbers": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Is digital root of N a prime?": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Corner Digits Sum": {
        "company": [],
        "tag": ['number-theory']
    },
    "Merge two strings": {
        "company": ['Goldman Sachs'],
        "tag": ['Strings', 'Data Structures']
    },
    "Find X and Y in Linear Equation": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Mind Game": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Perfect Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Duck Number": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Pronic Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Krishnamurthy number": {
        "company": [],
        "tag": ['Mathematical', 'factorial', 'Algorithms']
    },
    "Fighting the darkness": {
        "company": ['Snapdeal'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check Binary String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum Perimeter of Triangle from array": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Change the string": {
        "company": ['Oracle'],
        "tag": ['Strings', 'Data Structures']
    },
    "Balanced Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Multiply left and right array sum.": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum Triangle for given array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Cyclically rotate an array by one": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the smallest and second smallest element in an array": {
        "company": ['Amazon', 'Goldman Sachs'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find minimum and maximum element in an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the Number which contain the digit d": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'Numbers',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Maximum money": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reducing Walls": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Largest Element in Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Gray Code": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Find the nth number in the sequence": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Confused pappu": {
        "company": [],
        "tag": ['Strings', 'logical-thinking', 'Data Structures']
    },
    "Binary Addition of 1": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Difference series": {
        "company": [],
        "tag": ['Mathematical', 'series', 'logical-thinking', 'Algorithms']
    },
    "Long Long Decimal": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Extract Maximum": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Decimal to Base K conversion": {
        "company": [],
        "tag": ['Numbers']
    },
    "String of Commons": {
        "company": [],
        "tag": ["STL"]
    },
    "Print first letter of every word in the string": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Difficult Problems": {
        "company": [],
        "tag": ['Pattern Searching']
    },
    "The Penalty Shootout": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Sorted matrix": {
        "company": ['Amazon', 'FactSet'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Total digits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "set-bits and number": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Lottery Money": {
        "company": [],
        "tag": ['logical-thinking', 'implementation']
    },
    "Making elements distinct": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of all sub-sequences of a number": {
        "company": [],
        "tag": ['Strings', 'CPP', 'Data Structures']
    },
    "Same frequency in two halves": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Inverse Permutation": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Ishaan's Internship": {
        "company": [],
        "tag": ['Searching', 'Mathematical', 'Algorithms']
    },
    "Form largest number from digits": {
        "company": ['Paytm'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Number Series": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Binary Shift to Divide": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Find duplicates under given constraints": {
        "company": ['Yahoo'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check if date is valid": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sort the fest": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum sum of hour glass": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Tidy Number": {
        "company": ['Freshokartz'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Perfect Reversible String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Missing number": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Max-Min conversion": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Matching Pair": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Common Divisors": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Composite Series": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "The XOR Gate": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Professor and Parties": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Lazy Caterer's Problem": {
        "company": ['Visa'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Compare two Large Numbers": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum distance": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Rotating an Array": {
        "company": ['Codenation'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check if  given four points form a square": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Triangle growing downwards": {
        "company": [],
        "tag": ['Strings', 'pattern-printing', 'Data Structures']
    },
    "Number of Integer solutions": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find Substring from last of the Given String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Pattern Jumping": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Middle of Three": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Check if a number is power of another number": {
        "company": ['Zoho', 'SAP Labs'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Student record": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find all factorial numbers less than or equal to N": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Difference between sums of odd and even digits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Immediate Smaller Element": {
        "company": ['Flipkart', 'Amazon'],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Sum of fifth powers of the first n natural numbers": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'series', 'Algorithms']
    },
    "Check perfect square": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "XOR play": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Celsius to Fahrenheit Conversion": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find number of days between two given dates": {
        "company": ['Zoho', 'Salesforce'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Area of a triangle": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Middle Pattern": {
        "company": ['Zoho'],
        "tag": ['pattern-printing']
    },
    "Add two fractions": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum in Struct Array": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Third largest element": {
        "company": ['Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Arrays', 'Data Structures']
    },
    "longest substring containing '1'": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Binary Search": {
        "company": [
            'Infosys', 'Oracle',
            'Wipro', 'Linkedin',
            'Qualcomm', 'TCS',
            'Cognizant', 'Accenture'
        ],
        "tag": [
            'Arrays',
            'Searching',
            'Divide and Conquer',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Factor OR Multiple": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Power of Four": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Chocolate lengths": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Jay's Apples": {
        "company": [],
        "tag": ['set', 'Arrays', 'STL', 'Data Structures']
    },
    "C++ STL Deque": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "Midori and chocolates": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Ishaan's Sum Problem": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Cricket Average": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Tywin's War Strategy": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Dull Jack": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Ishaan Loves Chocolates": {
        "company": [],
        "tag": ['two-pointer-algorithm',
            'Arrays',
            'Greedy',
            'Data Structures',
            'Algorithms']
    },
    "Geek's Weight": {
        "company": [],
        "tag": ['series']
    },
    "Linear Diophantine Equations": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of f(a[i], a[j]) over all pairs in an array of n integers": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Map', 'Data Structures']
    },
    "Game with nos": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Remove consonants from a string": {
        "company": [],
        "tag": ['Searching', 'Strings', 'Data Structures', 'Algorithms']
    },
    "Play With OR": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Why is Melody so chocolaty?": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Buy chocolates and save N rupees": {
        "company": [],
        "tag": ['Mathematical', 'logical-thinking', 'Algorithms']
    },
    "Last duplicate element in a sorted array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Merge and Sort": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Merge Sort', 'Data Structures', 'Algorithms']
    },
    "Reading books": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "The amazing number": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "C++ Sets": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "Encoding names": {
        "company": [],
        "tag": ['Misc', 'logical-thinking']
    },
    "Message Spreading": {
        "company": [],
        "tag": ['Greedy', 'Mathematical', 'Algorithms']
    },
    "C++ Nega Bit": {
        "company": [],
        "tag": ['Mathematical', 'CPP', 'Operators', 'Algorithms']
    },
    "Set all odd bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Crazy String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Palindrome in both Decimal and Binary": {
        "company": [],
        "tag": ['Mathematical', 'palindrome', 'Algorithms']
    },
    "Tiger Zinda Hai": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Sophie Germain Prime": {
        "company": [],
        "tag": ['Prime Number', 'sieve']
    },
    "Compare two fractions": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Regular Expression', 'Algorithms']
    },
    "Product is even or odd?": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Count digits in given number N which divide N": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Minimal Summing Up": {
        "company": [],
        "tag": ['Operators']
    },
    "Convert array into Zig-Zag fashion": {
        "company": ['Paytm', 'Amazon', 'Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Remaining Cake": {
        "company": [],
        "tag": ['Mathematical', 'STL', 'Algorithms']
    },
    "Maximum repeating number": {
        "company": ['Accolite', 'Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Segregate Even and Odd numbers": {
        "company": ['Paytm', 'Accolite', 'Amazon', 'MakeMyTrip', 'Linkedin'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Numbers having alternate bits in range 1 to n": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Human and the tower": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Frobenius coin problem": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Doubling the value": {
        "company": ['Flipkart'],
        "tag": []
    },
    "Sandwiched_Vowels": {
        "company": [],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Remove Consecutive Characters": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Strong Numbers": {
        "company": [],
        "tag": ['Mathematical', 'factorial', 'Algorithms']
    },
    "Repetitive Addition Of Digits": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "2's Complement": {
        "company": ['Adobe'],
        "tag": []
    },
    "Count number of equal pairs in a string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Count the characters in each word in a given sentence": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "The problem of identical arrays": {
        "company": [],
        "tag": [
            'Arrays',
            'Sorting',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "GCD of Array": {
        "company": ['Wipro', 'SAP Labs'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find sum of even factors of a number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Make Co-prime Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count Non-Leaf Nodes in Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Floating point number even or odd": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Squares Difference": {
        "company": [],
        "tag": ['series', 'Numbers']
    },
    "Factors Sum": {
        "company": [],
        "tag": ['Factorization']
    },
    "Minimum element in BST": {
        "company": ['Microsoft'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Check whether two numbers differ at one bit position only": {
        "company": [],
        "tag": [
            'Mathematical',
            'Bit Magic',
            'Numbers',
            'Operators',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Print K smallest elements in their original order": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Maximum triplet sum in array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "HashMap Operations": {
        "company": ['Paytm'],
        "tag": ['Java', 'Java-Collections']
    },
    "Last index of a character in the string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Distinct Elements in a Stream": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Special Odd Series Sum": {
        "company": [],
        "tag": ['series']
    },
    "Check for three consecutive numbers": {
        "company": [],
        "tag": ['number-theory']
    },
    "Finding-Pairs": {
        "company": [],
        "tag": ['Arrays', 'STL', 'Data Structures', 'Algorithms']
    },
    "Even-Odd turn game": {
        "company": [],
        "tag": ['number-theory']
    },
    "Series X1": {
        "company": [],
        "tag": ['series']
    },
    "Maximum Integer Value": {
        "company": ['Facebook'],
        "tag": ['Strings', 'Data Structures']
    },
    "Narcissistic number": {
        "company": [],
        "tag": ['number-theory']
    },
    "Make the hit in power game !": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Check perfect square": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Check an Integer is power of 3 or not": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "GCD, LCM and Distributive Property": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Change all even bits in a number to 0": {
        "company": ['Samsung', 'Qualcomm'],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Product Sum": {
        "company": [],
        "tag": ['Numbers']
    },
    "Maximum weight difference": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Prime Palindrome Sum": {
        "company": [],
        "tag": ['Prime Number', 'palindrome']
    },
    "Finding Dory": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Powers game": {
        "company": [],
        "tag": [
            'Arrays',
            'Modular Arithmetic',
            'logical-thinking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "XOR Count Zero and One": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Carol Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Product of factors of number": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "First and last Bit": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Minimum product pair": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Java Collection | Set 5 (LinkedHash Set)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Find the closest number": {
        "company": [],
        "tag": ['Algorithms', 'Arrays', 'Binary Search', 'Data Structures']
    },
    "C++ STL | Set 7 (unordered map)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "C++ STL | Set 8 (unordered set)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "C++ STL | Set 6 (set)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "Implement Stack using Linked List": {
        "company": ['Microsoft', 'Samsung', 'FactSet', 'SAP Labs', 'Codenation'],
        "tag": ['Linked List', 'Stack', 'Data Structures']
    },
    "Implement Queue using Linked List": {
        "company": [],
        "tag": ['Queue', 'Data Structures']
    },
    "Implement stack using array": {
        "company": [
            'FactSet',
            'Visa',
            'Goldman Sachs',
            'Qualcomm',
            'Kritikal Solutions'
        ],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Implement Queue using array": {
        "company": ['Amazon', 'Goldman Sachs'],
        "tag": ['Arrays', 'Queue', 'Data Structures']
    },
    "Doubly linked list Insertion at given position": {
        "company": [],
        "tag": ['doubly-linked-list', 'Data Structures']
    },
    "Preorder Traversal": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Walmart'],
        "tag": ['Stack', 'Tree', 'Data Structures']
    },
    "Delete node in Doubly Linked List": {
        "company": ['Amazon', 'Walmart'],
        "tag": ['doubly-linked-list', 'Linked List', 'Data Structures']
    },
    "Size of Binary Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Inorder Traversal": {
        "company": ['Amazon', 'Snapdeal', 'Adobe'],
        "tag": ['Tree', 'Data Structures']
    },
    "Check If Circular Linked List": {
        "company": ['Microsoft', 'MAQ Software', 'SAP Labs'],
        "tag": ['circular-linked-list', 'Linked List', 'Data Structures']
    },
    "Search a node in BST": {
        "company": ['Linkedin'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Postorder Traversal": {
        "company": ['Morgan Stanley', 'Snapdeal', 'Walmart'],
        "tag": ['Tree', 'Data Structures']
    },
    "Sum of Binary Tree": {
        "company": ['FactSet'],
        "tag": ['Tree', 'Data Structures']
    },
    "Convert to Roman No": {
        "company": ['Amazon', 'Microsoft', 'InfoEdge', 'Facebook', 'Twitter'],
        "tag": ['Strings', 'Data Structures']
    },
    "Nth Multiple": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Count nodes of linked list": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Print Linked List elements": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Largest product": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Node at a given index in linked list": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Count zeros in a sorted matrix": {
        "company": [],
        "tag": ['Searching', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "C++ STL | Set 4 (stack)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "C++ STL | Set 5 (queue)": {
        "company": [],
        "tag": ['CPP', 'Queue', 'STL', 'Data Structures']
    },
    "Replace all 0's with 5": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Circular Linked List Traversal": {
        "company": ['Cisco'],
        "tag": ['circular-linked-list']
    },
    "Find Number of Numbers": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Delete Alternate Nodes": {
        "company": ['Morgan Stanley'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Identical Linked Lists": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Find n/k th node in Linked list": {
        "company": ['Hike', 'SAP Labs'],
        "tag": ['Linked List', 'Data Structures']
    },
    "C++ STL | Set 3 (map)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "Modular Node": {
        "company": [],
        "tag": [
            'Linked List',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Play with an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Linked List Insertion": {
        "company": ['Hike', 'Wipro', 'TCS'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Operating an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Anagram of String": {
        "company": ['Amazon'],
        "tag": ['Strings', 'anagram', 'Data Structures']
    },
    "Pairwise Consecutive Elements": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Triplet Family": {
        "company": ['Arcesium'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Find the Sum of Last N nodes of the Linked List": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Linked List Length Even or Odd?": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "C++ STL | Set 1 (vector)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "Remainder with 7": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Count Leaves in Binary Tree": {
        "company": ['Samsung', 'Ola Cabs'],
        "tag": ['Tree', 'Data Structures']
    },
    "Insert in Middle of Linked List": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Implement strstr": {
        "company": ['Amazon', 'Microsoft', 'Facebook', 'Qualcomm'],
        "tag": ['Strings', 'Pattern Searching', 'Design-Pattern', 'Data Structures']
    },
    "Smallest divisible number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Prime Number": {
        "company": ['VMWare', 'Amazon', 'SAP Labs'],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "Factorial": {
        "company": ['Morgan Stanley', 'Samsung', 'FactSet', 'MAQ Software', 'Wipro'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Weird Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Leap Year": {
        "company": ['Zoho'],
        "tag": ['Misc']
    },
    "Equal Sum and XOR": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Print the Kth Digit": {
        "company": ['Flipkart'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "LCM And GCD": {
        "company": ['SAP Labs'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Binary number to decimal number": {
        "company": ['Adobe'],
        "tag": ['CPP']
    },
    "Sort The Array": {
        "company": ['Cisco'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Searching a number": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Parity of unsigned integer": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Sieve of Eratosthenes": {
        "company": ['VMWare', 'MAQ Software', 'SAP Labs'],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Sort a String": {
        "company": [],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Shortest path from 1 to n": {
        "company": ['Morgan Stanley', 'Accolite', 'Samsung', 'Synopsys', 'Cisco'],
        "tag": [
            'Mathematical',
            'Graph',
            'Shortest Path',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Rotate Array": {
        "company": ['Amazon', 'Microsoft', 'MAQ Software'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Point lies or not": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Swap two nibbles in a byte": {
        "company": ['Accolite', 'Samsung', 'Cisco', 'Qualcomm'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Check if the number is Fibonacci": {
        "company": ['MAQ Software', 'Adobe'],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Multiply 2 matrices": {
        "company": [],
        "tag": ['Mathematical', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Rock Paper Scissors!": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Count zero": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reverse sub array": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Perfect Squares in a Range": {
        "company": ['Wipro'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum product of two numbers": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Remove character": {
        "company": ['Zoho', 'Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Perfect Cubes in a Range": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of distinct elements": {
        "company": ['Oxigen Wallet'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum difference pair": {
        "company": ['Amazon'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Evaluate the x + a = b statement": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Jumping Geek": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of large numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Factorial Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Angle between hour and minute hand": {
        "company": ['Paytm', 'Amazon', 'Salesforce', 'Infinera'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find position of set bit": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Convert from any base to decimal": {
        "company": ['Adobe'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Digits in a set": {
        "company": ['Morgan Stanley'],
        "tag": ['Arrays', 'Data Structures']
    },
    "nth digit of Fibonacci ": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Fibonacci', 'Algorithms']
    },
    "Numbers containing 0's from 1 to N": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Exceptionally odd": {
        "company": ['Amazon', 'Snapdeal'],
        "tag": ['Arrays', 'Hash', 'Bit Magic', 'Data Structures']
    },
    "Euler Totient Sum and Divisors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "LCM of given array elements": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Shortest direction": {
        "company": ['Flipkart'],
        "tag": ['Strings', 'Data Structures']
    },
    "Ways To Tile A Floor": {
        "company": ['Amazon'],
        "tag": ['Fibonacci']
    },
    "Extraction of secret message": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum Handshakes": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Smallest K digit number divisible by X": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "One's Complement": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "TreeMap Operations": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Akash and Friend": {
        "company": [],
        "tag": ['number-theory', 'Misc']
    },
    "Even occurring elements": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Sum of Products": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Missing ranges of numbers": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Divide the number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Base Conversion": {
        "company": ['Paytm'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of Digits Divisibility": {
        "company": ['Drishti-Soft'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Tough Competitors": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Total count": {
        "company": ['Zoho'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of primes": {
        "company": ['Zoho'],
        "tag": ['Prime Number', 'Numbers']
    },
    "Rearranging array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimize string value": {
        "company": ['Amazon', 'Microsoft', 'FactSet'],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum Area": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Multiples Power": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find the remainder": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Mega Sale": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "The AND Gate": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Good String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Repeated sum of digits": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "The OR Gate": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Sum of divisors": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Count Squares": {
        "company": ['Accolite', 'Snapdeal', 'Ola Cabs'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Nth Even Fibonacci Number": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Square Divisors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Spell a Number": {
        "company": [],
        "tag": ['Numbers', 'Combinatorial']
    },
    "Product of Complex Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of Consecutives": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Count Sorted Rows": {
        "company": ['Samsung'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Disarium Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Elements before which no element is bigger": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Smallest number with maximum and minimum divisor in an array": {
        "company": [],
        "tag": ['number-theory']
    },
    "Distance and Displacement": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "No of Carry Operations": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Check if a number can be expressed as x^y": {
        "company": ['Amazon', 'Housing.com'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Demonitisation": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Convert floating point to natural number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Ishwar and his proposals": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Make a Distinct Digit Array": {
        "company": ['Zoho', 'Amazon', 'MakeMyTrip'],
        "tag": []
    },
    "String with numbers at its end": {
        "company": ['Codenation'],
        "tag": ['Strings', 'Data Structures']
    },
    "Permutations in array": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Interesting Patterns": {
        "company": ['Adobe'],
        "tag": ['pattern-printing']
    },
    "Face off Tournament": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Squares in a Matrix": {
        "company": ['Junglee Games'],
        "tag": ['Mathematical', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Sum of product of x and y with floor(n/x) = y": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Encrypt the string - 1": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Replace the Bit": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Bit Magic', 'Data Structures']
    },
    "Binary fraction to decimal": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Metro Problem": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "King's War": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Help Joey": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Stuffs Division": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Sort in specific order": {
        "company": ['Zoho', 'Microsoft'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Ladoo problem": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Check if divisible by 11": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Type of array": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check if divisible by 4": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Lucky Number-2": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Invert the Bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Unique Numbers": {
        "company": ['Amazon'],
        "tag": ['Hash', 'Data Structures']
    },
    "Rahul lucky-unlucky": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "India's unique railway tracks": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Remove all characters other than alphabets": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Substrings with same first and last characters": {
        "company": ['Amazon'],
        "tag": ['Hash', 'Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Learning Output": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimize sum of alternate product": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Check if divisible by 36": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Check for subsequence": {
        "company": ['Zoho', 'Accolite', 'Amazon', 'Tesco'],
        "tag": ['Strings', 'Data Structures']
    },
    "Find the safe position": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count rotations divisible by 4": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Message decoding": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Strings', 'Data Structures', 'Algorithms']
    },
    "A guy with a mental problem": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check if the door is open or closed": {
        "company": ['TCS'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Half N by M": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Check squares": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Strong Numbers": {
        "company": [],
        "tag": ['Mathematical', 'factorial', 'Algorithms']
    },
    "Fake Profile": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Total distance travelled in an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Muskteers": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Magical String[Duplicate Problem]": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Check if divisible by 5": {
        "company": [],
        "tag": ['Mathematical', 'Modular Arithmetic', 'Algorithms']
    },
    "Wrong Ball": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of all subsets formed by first N natural numbers": {
        "company": [],
        "tag": ['Mathematical', 'subset', 'Algorithms']
    },
    "Does array represent Heap": {
        "company": ['Cisco'],
        "tag": ['Arrays', 'Binary Search Tree', 'Data Structures']
    },
    "Count number of elements between two given elements in array": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Thief trying to escape": {
        "company": ['MakeMyTrip', 'Cisco'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Another Matrix Game": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Missing number in shuffled array": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Tracks": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "First element to occur k times": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Count numbers containing 4": {
        "company": ['Drishti-Soft'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Length of Last word": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Last index of One": {
        "company": ['InMobi'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Remove Duplicates from unsorted array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum move to front operations": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Uncommon characters": {
        "company": ['Amazon'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Gray to Binary and Binary to Gray": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Rotate Bits": {
        "company": [],
        "tag": ['Strings', 'Bit Magic', 'Data Structures']
    },
    "Sum of Digits Prime/Non-Prime ": {
        "company": [],
        "tag": ['Prime Number']
    },
    "All numbers with specific difference": {
        "company": [],
        "tag": ['Mathematical', 'Binary Search', 'Algorithms']
    },
    "Reverse a string with spaces intact": {
        "company": ['Zoho'],
        "tag": ['two-pointer-algorithm', 'Strings', 'Data Structures', 'Algorithms']
    },
    "Multiple of N closest to X": {
        "company": [],
        "tag": ['Misc']
    },
    "Pair array product sum": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "K-th distinct element": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Sorting', 'STL', 'Data Structures', 'Algorithms']
    },
    "First Come First Serve": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Pair cube count": {
        "company": ['Adobe'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Check Arithmetic Progression": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Friendly Array": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "The Cycle Game": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sort the string in descending order": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Biggest integer having maximum digit sum": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Max Odd Sum": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Evaluate the expression": {
        "company": ['Flipkart'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Minimum Difference among K": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Swap and Maximize": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Line passing through 2 points": {
        "company": [],
        "tag": ['Geometric']
    },
    "Longest Equal Prefix": {
        "company": [],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Sum Terms Nth Row": {
        "company": [],
        "tag": ['series']
    },
    "Sort the Half Sorted": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Sorting', 'Algorithms']
    },
    "Set the rightmost unset bit": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Number of unique rectangles": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Fibonacci in the array": {
        "company": [],
        "tag": ['Arrays', 'Fibonacci', 'Data Structures']
    },
    "Alternative Sorting": {
        "company": ['Zoho'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Count numbers divisible by M": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Partition Point in the Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Set kth bit": {
        "company": ['Cisco', 'Qualcomm'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Count Pairs Odd Xor": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Sorting Employees": {
        "company": ['Oracle'],
        "tag": ['Arrays', 'Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Min value of x": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Quick Left Rotation": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check set bits": {
        "company": ['Amazon'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Difficulty of sentence": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Stable Sort and Position": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Distinct Adjacent Element": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Toggle bits given range": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Index of first 1 in a sorted array of 0s and 1s": {
        "company": ['Amazon', 'MakeMyTrip'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Odd to Even": {
        "company": ['Morgan Stanley'],
        "tag": ['Strings', 'Data Structures']
    },
    "Elements in the Range": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Adam Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of distinct elements for a limited range": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum sum of factors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Closest Number": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Twisted Prime Number": {
        "company": ['Zoho'],
        "tag": ['Prime Number']
    },
    "Lucky number and a sum": {
        "company": [],
        "tag": ['Numbers']
    },
    "Empty The Tank": {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Anagram Palindrome": {
        "company": ['Amazon', 'Snapdeal', 'D-E-Shaw'],
        "tag": ['Hash', 'Strings', 'palindrome', 'Data Structures']
    },
    "Positive and negative elements": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the position of M-th item": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Smallest number repeating K times": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Equalization of an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Finger Game": {
        "company": ['Paytm'],
        "tag": ['logical-thinking']
    },
    "Count the numbers satisfying (m + sum(m) + sum(sum(m))) equals to N": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Smallest power of 2 greater than or equal to n": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Rearrange the array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Part Sort": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Repeated Sum and then Multiply": {
        "company": [],
        "tag": ['Misc']
    },
    "Sums of i-th row and i-th column": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Longest increasing subarray": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Swapping Triangles": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Ceil The Floor": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Binary representation of previous number": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Anshuman's Favourite Number": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Left Rotate Matrix K times": {
        "company": ['Amazon'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Find k-th character in string": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Count the characters": {
        "company": ['Zoho', 'Amazon'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Repeated IDs": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Rectangle Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of Digit Modified": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Binary representation of next number": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Find unique element": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Repeated Character": {
        "company": ['Goldman Sachs'],
        "tag": ['Strings', 'Hash', 'Data Structures']
    },
    "Numbers having alternate bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Difference between highest and lowest occurrence": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Good or Bad string": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['Strings', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Three distinct factors": {
        "company": ['VMWare'],
        "tag": ['Mathematical', 'Prime Number', 'Numbers', 'Algorithms']
    },
    "Red OR Green": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximize OR": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Sort String": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "An Easy problem": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Generate all cyclic permutations of a number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Shortest un-ordered subarray": {
        "company": ['Oracle'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the fine": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Absolute Difference of 1": {
        "company": ['Amazon', 'Jabong'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Numbers having two adjacent set bits": {
        "company": [],
        "tag": ['Numbers']
    },
    "Minimum Product of k Integers": {
        "company": [],
        "tag": [
            'Arrays',
            'Sorting',
            'modular arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Number of compositions of a natural number": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Sum of first n terms": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sort first half in ascending and second half in descending": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Maximum number of unique prime factors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximize sum(arr[i]*i) of an Array": {
        "company": ['SAP Labs'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    }
}

const dataset_easy = {
    "Surround the 1's": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Subarray with given sum": {
        "company": ['Amazon', 'Facebook', 'Google', 'Visa'],
        "tag": [
            'Algorithms',
            'Arrays',
            'Data Structures',
            'prefix-sum',
            'Searching',
            'sliding-window'
        ]
    },
    "Nth Fibonacci Number": {
        "company": [
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Snapdeal',
            'MakeMyTrip',
            'Goldman Sachs',
            'MAQ Software',
            'Adobe'
        ],
        "tag": ['Dynamic Programming', 'Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Flip Bits": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Chocolate Distribution Problem": {
        "company": ['Flipkart'],
        "tag": ['Sorting', 'Algorithms']
    },
    "BFS of graph": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Ola Cabs',
            'Adobe',
            'SAP Labs'
        ],
        "tag": ['Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "DFS of Graph": {
        "company": ['Accolite', 'Amazon', 'Samsung', 'Intuit'],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Is it a tree?": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Median of BST": {
        "company": ['Amazon'],
        "tag": ['Traversal', 'Binary Search Tree', 'Data Structures', 'Algorithms']
    },
    "Inorder Successor in BST": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Chinese Postman": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Non Repeating Character": {
        "company": [
            'Flipkart', 'Amazon',
            'Microsoft', 'D-E-Shaw',
            'MakeMyTrip', 'Ola Cabs',
            'Payu', 'Teradata',
            'Goldman Sachs', 'MAQ Software',
            'InfoEdge', 'OATS Systems',
            'Tejas Network'
        ],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Given a linked list of 0s, 1s and 2s, sort it.": {
        "company": ['Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Remove duplicates from an unsorted linked list": {
        "company": ['Amazon', 'Intuit'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Delete middle element of a stack": {
        "company": ['Amazon'],
        "tag": ['Recursion', 'Stack', 'STL', 'Data Structures', 'Algorithms']
    },
    "Implement two stacks in an array": {
        "company": ['Microsoft', 'Samsung', 'Snapdeal', '24*7 Innovation Labs'],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Unique Number of Occurrences": {
        "company": ['PayPal', 'Bloomberg', 'Adobe', 'Google', 'Amazon', 'Apple'],
        "tag": ['set', 'Sorting', 'Map']
    },
    "Transpose of Matrix": {
        "company": ['MakeMyTrip', 'InfoEdge', 'Bloomberg'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Number of 1 Bits": {
        "company": [
            'Microsoft',
            'Samsung',
            'Adobe',
            'Wipro',
            'Brocade',
            'Juniper Networks',
            'Cisco',
            'Qualcomm'
        ],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Insert an Element at the Bottom of a Stack": {
        "company": [],
        "tag": [
            'Recursion',
            'Stack',
            'implementation',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Sort a k sorted doubly linked list": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Copy Set Bits in Range": {
        "company": ['D-E-Shaw', 'Adobe'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Unique rows in boolean matrix": {
        "company": ['Zoho', 'Amazon'],
        "tag": [
            'set',
            'Matrix',
            'Trie',
            'Data Structures',
            'Advanced Data Structure'
        ]
    },
    "Maximum Depth Of Binary Tree": {
        "company": ['Amazon', 'Microsoft', 'Facebook'],
        "tag": ['Tree', 'Data Structures']
    },
    "Union of Two Linked Lists": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            '24*7 Innovation Labs',
            'Taxi4Sure'
        ],
        "tag": ['Linked List', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Is Binary Number Multiple of 3": {
        "company": ['Amazon', 'Microsoft', 'Adobe'],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Maximum Weight Node": {
        "company": ['JUSPAY'],
        "tag": ['Arrays', 'Graph', 'Data Structures']
    },
    "Reverse Coding": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Ticket Counter": {
        "company": [],
        "tag": ['Greedy', 'Queue']
    },
    "Bus Conductor": {
        "company": [],
        "tag": ['Arrays', 'Sorting']
    },
    "Maximum Identical Bowls": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Make Palindrome": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'palindrome',
            'Data Structures',
            'Algorithms']
    },
    "Seating Arrangement": {
        "company": [],
        "tag": ['Arrays', 'Greedy']
    },
    "String Mirror": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Powerfull Integer": {
        "company": [],
        "tag": ['Hash', 'Sorting', 'Map', 'Data Structures', 'Algorithms']
    },
    "Binary Modulo": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic']
    },
    "Minimum Number": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Total Cuts": {
        "company": [],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Array Operations": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Bit Magic": {
        "company": [],
        "tag": ['Greedy', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Make the array beautiful": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Total Traversal Time": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Dominant Pairs": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Sorting', 'Algorithms']
    },
    "Wifi Range": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Equal Left and Right Subarray Sum": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Remainder on dividing by 11": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Modular Arithmetic', 'Algorithms']
    },
    "Make Array Elements Equal": {
        "company": ['Expedia'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Minimum Integer": {
        "company": [],
        "tag": ['Mathematical', 'Arrays']
    },
    "Count the Substrings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Taxi Booking": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Leaders in an array": {
        "company": ['Payu', 'Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Frogs and Jumps": {
        "company": ['PayPal'],
        "tag": ['Arrays', 'Mathematical', 'sieve', 'Data Structures', 'Algorithms']
    },
    "Number of Subarrays of 0's": {
        "company": [],
        "tag": ['Arrays', 'Mathematical']
    },
    "Distinct Difference": {
        "company": [],
        "tag": ['set', 'Arrays', 'Map', 'Data Structures']
    },
    "Assign Cookies": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Binary matrix having maximum number of 1s": {
        "company": ['Swiggy'],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Max Level Sum in Binary Tree": {
        "company": ['Amazon'],
        "tag": ['Binary Search Tree', 'Binary Search', 'Tree']
    },
    "Reverse both parts": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Is it Fibonacci": {
        "company": [],
        "tag": ['Arrays', 'Data Structures', 'sliding-window']
    },
    "Divisor Game": {
        "company": [],
        "tag": ['Dynamic Programming', 'Recursion', 'Backtracking', 'Algorithms']
    },
    "Count number of free cell": {
        "company": ['Intuit'],
        "tag": ['Hash', 'Matrix', 'Data Structures']
    },
    "Max Sum without Adjacents": {
        "company": [
            'Paytm',
            'Amazon',
            'OYO Rooms',
            'FactSet',
            'Walmart',
            'Adobe',
            'Oxigen Wallet',
            'Yahoo'
        ],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Balloon Everywhere": {
        "company": [],
        "tag": ['Map', 'Data Structures']
    },
    "Apple Sequences": {
        "company": ['Ola Cabs'],
        "tag": ['two-pointer-algorithm', 'implementation', 'Algorithms']
    },
    "CBA Subsequence": {
        "company": [],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Make array elements unique": {
        "company": ['Dunzo'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Find the first node of loop in linked list": {
        "company": [],
        "tag": [
            'Linked List',
            'two-pointer-algorithm',
            'Algorithms',
            'Data Structures'
        ]
    },
    "Bird and maximum fruit gathering": {
        "company": ['Facebook'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Transform to Sum Tree": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'FactSet', 'Walmart'],
        "tag": ['Tree', 'Data Structures']
    },
    "Last modified ball": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Absolute difference divisible by K": {
        "company": ['Goldman Sachs'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Minimize the sum": {
        "company": ['Swiggy'],
        "tag": [
            'Arrays',
            'Sorting',
            'priority-queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Type it!": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Unique Binary Tree Requirements": {
        "company": [],
        "tag": ['Traversal', 'Algorithms']
    },
    "Sort an array of 0s, 1s and 2s": {
        "company": [
            'Paytm', 'Flipkart',
            'Morgan Stanley', 'Amazon',
            'Microsoft', 'OYO Rooms',
            'Samsung', 'Snapdeal',
            'Hike', 'MakeMyTrip',
            'Ola Cabs', 'Walmart',
            'MAQ Software', 'Adobe',
            'Yatra.com', 'SAP Labs',
            'Qualcomm'
        ],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Design HashMap": {
        "company": [],
        "tag": ['Hash', 'Map', 'Design-Pattern', 'Data Structures']
    },
    "All divisors of a Number": {
        "company": [],
        "tag": ['Mathematical', 'Factorization', 'Algorithms']
    },
    "Print GFG n times": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Radix Sort": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Maximum Nesting Depth of the Parentheses": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Fibonacci Series up to Nth term": {
        "company": [],
        "tag": ['Recursion', 'Fibonacci', 'Algorithms']
    },
    "Majority Vote": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Print N to 1 without loop": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Largest odd number in string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Union-Find": {
        "company": [],
        "tag": ['Graph', 'Disjoint Set', 'Data Structures']
    },
    "Move Last Element to Front of a Linked List": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Max Min": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Find all possible paths from top to bottom": {
        "company": [],
        "tag": ['Matrix', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Smallest Subset with Greater Sum": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Find pairs with given sum in doubly linked list": {
        "company": [],
        "tag": [
            'doubly-linked-list',
            'two-pointer-algorithm',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum Sum of Absolute Differences of Pairs": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Smallest window containing 0, 1 and 2": {
        "company": ['Paytm'],
        "tag": [
            'sliding-window',
            'two-pointer-algorithm',
            'Strings',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Matrix Operations": {
        "company": ['Samsung'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Triangle and Square": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Can Make Triangle": {
        "company": [],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Maximum GCD of siblings of a binary tree": {
        "company": ['Samsung'],
        "tag": ['Arrays', 'Tree', 'Data Structures']
    },
    "Positive Negative Pair": {
        "company": ['Amazon'],
        "tag": ['Hash', 'Data Structures']
    },
    "Min Cost Climbing Stairs": {
        "company": [],
        "tag": ['Dynamic Programming']
    },
    "Rearrange Geek and his Classmates": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Gadgets of Doraland": {
        "company": [],
        "tag": ['Hash', 'Heap', 'Data Structures']
    },
    "Boundary traversal of matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Print Diagonally": {
        "company": ['Amazon'],
        "tag": ['Misc', 'Matrix', 'Data Structures']
    },
    "Unique substrings": {
        "company": [],
        "tag": ['Strings', 'STL', 'Data Structures']
    },
    "Minimum sum of subarray": {
        "company": [],
        "tag": ['Kadane', 'Algorithms']
    },
    "Geek and Path": {
        "company": [],
        "tag": ['Dynamic Programming', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Convert a sentence into its equivalent mobile numeric keypad sequence": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Queue using stack": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Queue', 'Design-Pattern', 'Data Structures']
    },
    "Division II": {
        "company": [],
        "tag": ['Mathematical', 'Modular Arithmetic', 'Algorithms']
    },
    "Maximum number of 2X2 squares": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Length of the Subsequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Plus One": {
        "company": ['Microsoft', 'Google'],
        "tag": ['Arrays', 'STL', 'Data Structures']
    },
    "Minimum steps to make product equal to one": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Largest value in each level": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Even and Odd": {
        "company": ['Paytm', 'Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Tree and XOR": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Tree and Level": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "COVID19": {
        "company": [],
        "tag": ['Graph', 'Shortest Path', 'Data Structures', 'Algorithms']
    },
    "Geek and F.R.I.E.N.D.S": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Geek and City": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Tree and Distance": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Contest Score": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Geek and Subset Sum": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "3 Data structures": {
        "company": [],
        "tag": ['priority-queue', 'Data Structures']
    },
    "Geek-onacci Number ||": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Geek and Bridges": {
        "company": ['Flipkart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "K Subarray Sum": {
        "company": [],
        "tag": ['priority-queue', 'Data Structures']
    },
    "Reach the Target ||": {
        "company": [],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Geek and Contest ||": {
        "company": [],
        "tag": ['priority-queue', 'Data Structures']
    },
    "Geeks's Garden": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Search insert position of K in a sorted array": {
        "company": ['Microsoft'],
        "tag": ['Searching', 'Algorithms']
    },
    "Digit Combination": {
        "company": [],
        "tag": ['Backtracking', 'Algorithms']
    },
    "K larger values ||": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Geek and Function |V": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Longest Subarray with atmost K Even elements": {
        "company": [],
        "tag": ['sliding-window', 'Mathematical', 'Algorithms']
    },
    "Reach the target": {
        "company": [],
        "tag": ['Mathematical', 'Recursion', 'Algorithms']
    },
    "Flip the Matrix": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Geek and Code": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Geek and Pens": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Reverse squared sum": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Geek and his Marks |||": {
        "company": [],
        "tag": ['prefix-sum', 'Binary Search', 'Algorithms']
    },
    "Adding One": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Rotation": {
        "company": ['Flipkart', 'Amazon', 'ABCO'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Common Subsequence OldP": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Check whether K-th bit is set or not": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Find distinct elements": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Shortest path to print": {
        "company": [],
        "tag": ['Strings', 'Shortest Path', 'Data Structures', 'Algorithms']
    },
    "Count the Zeros": {
        "company": ['Amazon', 'Yahoo'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Longest Consecutive 1's": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Pattern searching": {
        "company": [],
        "tag": ['STL']
    },
    "Rotate by 90 degree": {
        "company": ['Paytm', 'Microsoft', 'Samsung', 'Adobe'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Swap all odd and even bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Reach a given score": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Rightmost different bit": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Check if string is rotated by two places": {
        "company": ['Accolite', 'Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Determinant of a Matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Generate Binary Numbers": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": ['Queue', 'Data Structures']
    },
    "Wave Array": {
        "company": [
            'Paytm',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'FactSet',
            'Goldman Sachs',
            'Google'
        ],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Anagram": {
        "company": ['Flipkart', 'Directi', 'Adobe', 'Google', 'Nagarro', 'Media.net'],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Largest number with given sum": {
        "company": ['Microsoft'],
        "tag": [
            'Strings',
            'Greedy',
            'constructive algo',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Evaluation of Postfix Expression": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Lucky Numbers": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Recursion', 'Algorithms']
    },
    "Find first set bit": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Floor in a Sorted Array": {
        "company": ['Amazon'],
        "tag": ['Searching', 'Sorting', 'Algorithms']
    },
    "Roman Number to Integer": {
        "company": ['Zoho', 'Amazon', 'Microsoft', 'Facebook', 'Twitter'],
        "tag": ['Strings', 'Data Structures']
    },
    "Roof Top": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Unique Substrings": {
        "company": [],
        "tag": ['Java', 'STL', 'Java-Collections']
    },
    "Equilibrium Point": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Frequencies of Limited Range Array Elements": {
        "company": ['Paytm', 'VMWare', 'Zoho', 'Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Activity Selection": {
        "company": ['Flipkart', 'Morgan Stanley', 'Facebook'],
        "tag": ['Binary Search', 'Algorithms', 'Greedy']
    },
    "Isomorphic Strings": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Missing number in array": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Accolite', 'Amazon',
            'Microsoft', 'D-E-Shaw',
            'Ola Cabs', 'Payu',
            'Visa', 'Intuit',
            'Adobe', 'Cisco',
            'Qualcomm'
        ],
        "tag": ['Arrays', 'Searching', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Minimum Number in a sorted rotated array": {
        "company": [],
        "tag": [
            'Arrays',
            'Searching',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Modular Multiplicative Inverse": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of all substrings of a number": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Sort by Absolute Difference": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Two Repeated Elements": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Common Elements": {
        "company": [],
        "tag": ['Java', 'STL', 'Java-Collections']
    },
    "Sum of two numbers without using arithmetic operators": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Ways to write n as sum": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Stacking Up Discs": {
        "company": [],
        "tag": ['Dynamic Programming', 'Sorting', 'Algorithms']
    },
    "Count number of hops": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum Cost of ropes": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms', 'Goldman Sachs'],
        "tag": ['Queue', 'Heap', 'Data Structures']
    },
    "Search an element in sorted and rotated array": {
        "company": [
            'Paytm', 'Flipkart',
            'Amazon', 'Microsoft',
            'Snapdeal', 'D-E-Shaw',
            'FactSet', 'Hike',
            'MakeMyTrip', 'Intuit',
            'Adobe', 'BankBazaar',
            'Times Internet'
        ],
        "tag": ['Searching', 'Divide and Conquer', 'Algorithms']
    },
    "Rotate Array": {
        "company": ['Amazon', 'Microsoft', 'MAQ Software'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Binary Search in forest": {
        "company": ['Goldman Sachs'],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Top K Frequent Elements in Array - |": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Look and Say Pattern": {
        "company": ['Zoho', 'Amazon', 'Microsoft', 'Facebook'],
        "tag": ['Strings', 'pattern-printing', 'Data Structures']
    },
    "Geek and Subsequence": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Geek-onacci Number": {
        "company": [],
        "tag": ['Recursion', 'Algorithms']
    },
    "Good Numbers": {
        "company": [],
        "tag": ['Queue', 'Data Structures']
    },
    "Power of 3": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Valid String": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Geek and his Marks": {
        "company": [],
        "tag": ['Searching', 'Algorithms']
    },
    "Ticket Counter": {
        "company": [],
        "tag": ['Mathematical', 'Queue', 'Data Structures', 'Algorithms']
    },
    "GeeksforGeeks": {
        "company": [],
        "tag": ['Queue', 'Data Structures']
    },
    "Geek and Books": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Geek and his Marks ||": {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Geeks and Groceries ||": {
        "company": [],
        "tag": ['Merge Sort', 'Algorithms']
    },
    "Geeks and Groceries": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Kth Frequency": {
        "company": [],
        "tag": ['Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "K larger values": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Numbers containing 1, 2 and 3": {
        "company": ['Goldman Sachs'],
        "tag": ['Arrays', 'Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Number of Unique Paths": {
        "company": ['Walmart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Nth number made of prime digits": {
        "company": [],
        "tag": [
            'Arrays',
            'Strings',
            'Mathematical',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Three Sum Closest": {
        "company": ['Amazon', 'Microsoft', 'Google', 'Apple'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "First Repeating Element": {
        "company": ['Amazon', 'Oracle'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Excel Sheet | Part - 2": {
        "company": [],
        "tag": ['number-theory']
    },
    "Intersection of two arrays": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'PayPal', 'Rockstand'],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Hash',
            'Mathematical',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Product array puzzle": {
        "company": [
            'Flipkart',
            'Morgan Stanley',
            'Accolite',
            'Amazon',
            'Microsoft',
            'D-E-Shaw',
            'Intuit',
            'Opera'
        ],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Minimum indexed character": {
        "company": ['Ola Cabs'],
        "tag": ['Hash', 'Strings', 'STL', 'Data Structures']
    },
    "Parenthesis Checker": {
        "company": [
            'Flipkart', 'Amazon',
            'Microsoft', 'OYO Rooms',
            'Snapdeal', 'Oracle',
            'Walmart', 'Adobe',
            'Google', 'Yatra.com'
        ],
        "tag": ['Strings', 'Stack', 'STL', 'Data Structures']
    },
    "Minimum indexed character": {
        "company": ['Ola Cabs'],
        "tag": ['Hash', 'Strings', 'STL', 'Data Structures']
    },
    "Pair with largest sum which is less than K in the array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Modified String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Subarray range with given sum": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Winner of an election": {
        "company": ['Adobe', 'Atlassian'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Panagram Checking": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Reverse words in a given string": {
        "company": [
            'Paytm',
            'Accolite',
            'Amazon',
            'Microsoft',
            'Samsung',
            'MakeMyTrip',
            'Goldman Sachs',
            'Adobe',
            'SAP Labs',
            'Cisco'
        ],
        "tag": ['Strings', 'Data Structures']
    },
    "Mother Vertex": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Subarray with 0 sum": {
        "company": ['Paytm', 'Adobe'],
        "tag": [
            'sliding-window',
            'Hash',
            'Map',
            'STL',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Union of Two Sorted Arrays": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Print adjacency list": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Maximum occured integer": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "K-Palindrome": {
        "company": ['Facebook'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Number of substrings divisible by 8 but not by 3": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find minimum adjustment cost of an array": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximum weight transformation of a given string": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Change of Key in BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Count binary strings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum number of deletions.": {
        "company": [],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum Cost To Make Two Strings Identical": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Total number of non-decreasing numbers with n digits": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Printing Maximum Sum Increasing Subsequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Longest subsequence-1": {
        "company": ['Flipkart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Sum of length": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Maximum Sum Bitonic Subsequence": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Area of intersection of two circles": {
        "company": [],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Theft at World Bank": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Tricky Sorting Cost": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Remove minimum elements": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Max Length Removal": {
        "company": [],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Maximum value of expression": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "C++ Exception Handling": {
        "company": [],
        "tag": ['CPP', 'OOP']
    },
    "Minimum Swaps required to group all 1s together": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Ways to split string such that each partition starts with distinct letter": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum prefix sum for a given range": {
        "company": [],
        "tag": [
            'Arrays',
            'Segment-Tree',
            'Data Structures',
            'Advanced Data Structure']
    },
    "Eulerian Path in an Undirected Graph": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Check if two strings are k-anagrams or not": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'Google'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Find perimeter of shapes": {
        "company": [],
        "tag": ['Matrix', 'Geometric', 'Data Structures']
    },
    "Choose and Swap": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Operations on PriorityQueue": {
        "company": [],
        "tag": ['Java', 'Queue', 'Java-Collections', 'Data Structures']
    },
    "Longest Geometric Progression": {
        "company": [],
        "tag": ['Misc']
    },
    "Subarrays with given sum": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Nth item through sum": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'STL', 'Data Structures']
    },
    "Equalize an array in minimum operations": {
        "company": [],
        "tag": ['Mathematical', 'Sorting', 'Algorithms']
    },
    "Cosmic Number": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'Numbers',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum Swaps for Bracket Balancing": {
        "company": [],
        "tag": ['Strings', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Partition a number into two divisible parts": {
        "company": ['Oracle'],
        "tag": [
            'Strings',
            'Mathematical',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Break a number": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Huffman Decoding-1": {
        "company": [],
        "tag": ['Greedy', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Huffman Decoding": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Duplicate Elements": {
        "company": [],
        "tag": ['Map', 'Data Structures']
    },
    "Java Collections | Set 6 (Stack)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Get min at pop": {
        "company": [],
        "tag": ['Stack', 'STL', 'Data Structures']
    },
    "Dictionary Usage 2 - Java": {
        "company": [],
        "tag": ['Misc']
    },
    "Pair in Java": {
        "company": [],
        "tag": ['Java-Class and Object']
    },
    "Precise Format - Java": {
        "company": [],
        "tag": ['Java']
    },
    "Dictionary Usage - Java": {
        "company": [],
        "tag": ['Misc']
    },
    "Multiset Operations": {
        "company": [],
        "tag": ['set', 'STL']
    },
    "Two Dimensional World": {
        "company": [],
        "tag": ['cpp-pointers', 'CPP']
    },
    "Greater and Smaller Ones": {
        "company": [],
        "tag": ['set', 'Map', 'Data Structures']
    },
    "Xoring and Clearing - Java": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Maximum Area Rectangle": {
        "company": [],
        "tag": ['Java-Class and Object']
    },
    "Learning Structs": {
        "company": [],
        "tag": ['Class']
    },
    "Delete Array": {
        "company": [],
        "tag": ['cpp-pointers']
    },
    "The Pattern Matcher - Java": {
        "company": [],
        "tag": ['Java-Strings']
    },
    "Structs and Objects": {
        "company": [],
        "tag": ['Class']
    },
    "Consonants and Vowels check": {
        "company": [],
        "tag": ['cpp-strings']
    },
    "Frequency Game": {
        "company": ['Google'],
        "tag": ['Map', 'Data Structures']
    },
    "Swap the objects": {
        "company": [],
        "tag": ['Class']
    },
    "The Size of": {
        "company": [],
        "tag": ['cpp-operator']
    },
    "Step by Step Condition - Java": {
        "company": [],
        "tag": ['Java-Control-Flow']
    },
    "Multimap Operations": {
        "company": [],
        "tag": ['Map', 'STL', 'Data Structures']
    },
    "Even Subsets - Java": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Pair Sum Existence": {
        "company": [],
        "tag": ['set']
    },
    "Using Calendar - Java": {
        "company": [],
        "tag": ['Misc']
    },
    "Pair Sum Existence- Revisited": {
        "company": [],
        "tag": ['Map', 'Data Structures']
    },
    "Bitwise Operators - Java": {
        "company": [],
        "tag": ['Java-Operators']
    },
    "Bitwise Operators": {
        "company": [],
        "tag": ['cpp-operator']
    },
    "Even Odd - Java": {
        "company": [],
        "tag": ['Java-Control-Flow']
    },
    "For Loop- primeCheck - Java": {
        "company": [],
        "tag": ['Java-Control-Flow']
    },
    "BigInteger mod": {
        "company": [],
        "tag": ['Java-BigInteger']
    },
    "Student of the Year": {
        "company": [],
        "tag": ['STL']
    },
    "BigInteger Multiply": {
        "company": [],
        "tag": ['Java-BigInteger']
    },
    "Sum of Big Integers": {
        "company": [],
        "tag": ['Java-BigInteger']
    },
    "Queue Operations": {
        "company": [],
        "tag": ['Queue', 'Data Structures']
    },
    "Consonants and Vowels check - Java": {
        "company": [],
        "tag": ['Java-Strings']
    },
    "Learning to be precise": {
        "company": [],
        "tag": ['CPP']
    },
    "The Pattern Matcher": {
        "company": [],
        "tag": ['cpp-strings']
    },
    "Matrix Interchange - Java": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "ArrayList Operation": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Pair Sum in Vector": {
        "company": [],
        "tag": ['STL']
    },
    "Operations on ArrayList": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Predict the Column - Java": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Step by Step Condition": {
        "company": [],
        "tag": ['CPP-Control-Flow']
    },
    "Magic in CPP": {
        "company": [],
        "tag": ['cpp-pointers', 'CPP']
    },
    "Even Subsets": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Need Some Change - Java": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Xoring and Clearing": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Almost Equal": {
        "company": [],
        "tag": ['cpp-strings']
    },
    "logical Operators - Java": {
        "company": [],
        "tag": ['Java-Operators']
    },
    "nextLine and next": {
        "company": [],
        "tag": ['Java']
    },
    "Deque Implementations": {
        "company": [],
        "tag": ['Java', 'Queue', 'STL', 'Java-Collections', 'Data Structures']
    },
    "Stack Operations": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "GetLine and Ignore": {
        "company": [],
        "tag": ['cpp-strings']
    },
    "Taking input": {
        "company": [],
        "tag": ['CPP']
    },
    "Predict the Column": {
        "company": [],
        "tag": ['Arrays', 'Matrix', 'Data Structures']
    },
    "Back to Front": {
        "company": [],
        "tag": ['STL']
    },
    "For Loop- primeCheck": {
        "company": [],
        "tag": ['CPP-Control-Flow']
    },
    "The New Line - Java": {
        "company": [],
        "tag": ['Java']
    },
    "Learning Macros": {
        "company": [],
        "tag": ['CPP']
    },
    "Learn to Comment": {
        "company": [],
        "tag": ['CPP']
    },
    "Even Odd": {
        "company": [],
        "tag": []
    },
    "Count the Specials": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Java Exception Handling": {
        "company": [],
        "tag": ['Java', 'OOP']
    },
    "C++ Multi-level inheritance": {
        "company": [],
        "tag": ['CPP', 'OOP']
    },
    "Count Odd Even - Java": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Learn to Comment - Java": {
        "company": [],
        "tag": ['Java']
    },
    "Need Some Change": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "While loop- printTable": {
        "company": [],
        "tag": ['CPP-Control-Flow']
    },
    "C++ Function overloading": {
        "company": [],
        "tag": ['CPP', 'OOP']
    },
    "Count Odd Even": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Data Types - Java": {
        "company": [],
        "tag": ['Java']
    },
    "The New Line": {
        "company": [],
        "tag": ['CPP']
    },
    "Java Collections | Set 7 (LinkedList)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "C++ Template": {
        "company": [],
        "tag": ['Misc', 'CPP', 'Class']
    },
    "C++ complex number addition (operator overloading)": {
        "company": [],
        "tag": ['CPP', 'OOP']
    },
    "Pair with given sum in a sorted array": {
        "company": ['Adobe'],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Mr. Binary": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Compute sum of digits in all numbers from 1 to n": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Choose and Swap": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Count Increasing Subsequences": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximize Dot Product": {
        "company": ['Directi'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Optimal walk": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find the Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Product of two digit numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Poisioned Sweet": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Diamond in a Bag": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Number of digits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Finding Profession": {
        "company": ['Oracle'],
        "tag": ['Recursion', 'Algorithms']
    },
    "Magic numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Buildings receiving sunlight": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "RegEx  matching": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Kth boom number": {
        "company": [],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Check If two Line segments Intersect": {
        "company": ['Snapdeal', 'Adobe', 'Zomato'],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Pick Values": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Class Average": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "XOR Cipher": {
        "company": [],
        "tag": ['Strings', 'Bit Magic', 'Data Structures']
    },
    "Max value": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Pair the minimum": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum Value Assigned": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of GCDs": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Save Ironman": {
        "company": ['Flipkart'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Vertical Width of a Binary Tree": {
        "company": [],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Nearest Perfect Square": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Help Ishaan": {
        "company": [],
        "tag": ['Pattern Searching']
    },
    "Subtraction and two numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Ordered Prime Signature": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'sieve', 'STL', 'Algorithms']
    },
    "Squares and divisibility": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "K-th missing element": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Number of solutions": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Prime String": {
        "company": [],
        "tag": ['Strings', 'Prime Number', 'Data Structures']
    },
    "Fitting The Array": {
        "company": [],
        "tag": [
            'Arrays',
            'Sorting',
            'logical-thinking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Number of matches": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Permutation with Spaces": {
        "company": ['Amazon'],
        "tag": ['Recursion', 'Backtracking', 'Algorithms']
    },
    "GCD and Fibonacci Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Crack the series": {
        "company": ['Cognizant'],
        "tag": ['series', 'Numbers']
    },
    "Max sum submatrix": {
        "company": ['Accolite'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Non Fibonacci Number": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Sachin's love for runs": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Collection of pens": {
        "company": [],
        "tag": ['Prime Number']
    },
    "Recursively find sum of digits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum value": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Summing the Sum": {
        "company": [],
        "tag": ['series']
    },
    "The Wedding Date": {
        "company": [],
        "tag": ['Strings', 'Date-Time', 'Data Structures', 'Algorithms']
    },
    "Maximum Volume of a Rectangular Box": {
        "company": ['TCS'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Mansi and her series": {
        "company": [],
        "tag": ['Prime Number', 'series', 'Numbers']
    },
    "Penalty Shooters": {
        "company": [],
        "tag": ['Mathematical', 'logical-thinking', 'Algorithms']
    },
    "Charul and vessels": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Split the string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "The Inverting Factor": {
        "company": [],
        "tag": ['Arrays', 'Numbers', 'Reverse', 'Data Structures']
    },
    "Geek and his Binary Strings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Bitwise OR in a given Range": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Print this pattern!": {
        "company": ['Adobe'],
        "tag": ['pattern-printing']
    },
    "Find Unique pair in an array with pairs of numbers": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Product of Prime Factors": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "The Non-repetitive String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Nikit's Problem": {
        "company": [],
        "tag": ['Mathematical', 'Misc', 'logical-thinking', 'Algorithms']
    },
    "Sort by Set Bit Count": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Minimum Notes Required": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Connell Sequence": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Minimum Energy": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "English Words": {
        "company": [],
        "tag": ['Misc', 'logical-thinking']
    },
    "Minimal moves to form a string": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Check if it is possible to convert one string into another with given constraints": {
        "company": [],
        "tag": ['Strings', 'constructive algo', 'Data Structures']
    },
    "Faulty Keyboard": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Letter Writer": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Left or Right Positioned Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Euler Totient": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Least Prime Factor": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'sieve', 'Algorithms']
    },
    "Max and Min Products": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Adding Ones": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Geometric Progression": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Happy Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Time Difference": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Modified Fibonacci": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Modular Arithmetic', 'Algorithms']
    },
    "Kaprekar Number": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Keith Number": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Min Number of Flips": {
        "company": ['Goldman Sachs'],
        "tag": ['Strings', 'Data Structures']
    },
    "Game of cells": {
        "company": [],
        "tag": ['Game Theory']
    },
    "Candy Packets": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Withdrawing Money": {
        "company": [],
        "tag": ['Mathematical', 'Division', 'Algorithms']
    },
    "Palindromic Series": {
        "company": [],
        "tag": [
            'Arrays',
            'Strings',
            'Numbers',
            'palindrome',
            'alphabets',
            'Data Structures'
        ]
    },
    "Smallest greater elements in whole array": {
        "company": ['Zoho'],
        "tag": [
            'Arrays',
            'Searching',
            'Sorting',
            'CPP',
            'STL',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Pairs with certain difference": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Deficient Number": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Lucky Ishaan": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Lucas Number": {
        "company": [],
        "tag": ['Dynamic Programming', 'series', 'Algorithms']
    },
    "Largest Even Number": {
        "company": ['Snapdeal'],
        "tag": ['Mathematical', 'Sorting', 'Algorithms']
    },
    "Circular Prime Number": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "Circle and Lattice Points": {
        "company": [],
        "tag": ['Geometric']
    },
    "Minimum Steps": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Find (a^b)%m": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Algorithms']
    },
    "Sphenic Number": {
        "company": [],
        "tag": ['Prime Number']
    },
    "Find the closest pair from two arrays": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "String Manipulation": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Maximum distance in a string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Move all negative elements to end": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Exit Point in a Matrix": {
        "company": ['Samsung'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Binary Tree K level sum": {
        "company": ['Samsung'],
        "tag": ['Tree', 'Data Structures']
    },
    "Divisor Product": {
        "company": [],
        "tag": ['Mathematical', 'Division', 'Algorithms']
    },
    "Min Subsets with Consecutive Numbers": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Make Zeroes": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Next Greater Even Number": {
        "company": ['Zoho', 'Amazon', 'FactSet', 'MakeMyTrip', 'Yahoo'],
        "tag": ['Arrays', 'Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Odd Even Problem": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Bit Magic', 'Data Structures']
    },
    "Raju and coins": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Delete array elements which are smaller than next or become smaller": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'CPP', 'STL', 'Data Structures']
    },
    "Make it Colorful": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Largest Product Pallindrome": {
        "company": ['Yahoo'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Sum of k smallest elements in BST": {
        "company": ['Amazon'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "1[0]1 Pattern Count": {
        "company": ['Samsung'],
        "tag": ['Strings', 'Pattern Searching', 'Data Structures']
    },
    "Last non-zero digit in factorial": {
        "company": [],
        "tag": ['Mathematical', 'Recursion', 'factorial', 'Algorithms']
    },
    "Save The Nation": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Encrypt the string - 2": {
        "company": [],
        "tag": ['Strings', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Find sum of divisors ": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "Kth Prime Factor": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'sieve', 'Algorithms']
    },
    "Tom and String": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Pair with greatest product in array": {
        "company": ['Linkedin'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Max sum in sub-arrays": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Last two digit Fibonacci": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Odd Game": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum no of 1's row": {
        "company": ['Paytm', 'Microsoft', '24*7 Innovation Labs', 'D-E-Shaw'],
        "tag": ['Searching', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Smallest subarray with sum greater than x": {
        "company": ['Accolite', 'Amazon', 'Goldman Sachs', 'Google', 'Facebook'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sharing is Caring": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find Nth root of M": {
        "company": ['Directi', 'Accenture'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Game of XOR": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Seeds of a number": {
        "company": ['Epic Systems'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Recamans sequence": {
        "company": [],
        "tag": [
            'Hash',
            'Mathematical',
            'Recursion',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Smallest number with sum of digits as N and divisible by 10^N": {
        "company": [],
        "tag": ['Greedy', 'Numbers', 'Algorithms']
    },
    "Learn Geometry": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find largest word in dictionary": {
        "company": ['Walmart', 'Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Love For The Twins": {
        "company": [],
        "tag": ['Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Race in Fooland": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'STL', 'Data Structures', 'Algorithms']
    },
    "Maximum difference Indexes": {
        "company": [],
        "tag": ['Arrays', 'Map', 'Data Structures']
    },
    "Count subsets having distinct even numbers": {
        "company": [],
        "tag": ['Arrays', 'subset', 'Combinatorial', 'Data Structures']
    },
    "Sid and his prime money": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Playing with mobile numbers": {
        "company": [],
        "tag": ['Regular Expression']
    },
    "Increasing Sub Sequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Sort string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Matrix Game - 1": {
        "company": ['Ola Cabs'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Counting number of sentences and words in text": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Rahul and his Villa": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Maximum number of partitions that can be sorted individually to make sorted": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Decreasing Sequence": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Number Game": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Palindrome Sentence": {
        "company": ['Facebook'],
        "tag": [
            'two-pointer-algorithm',
            'Strings',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Shortest distance in infinite tree": {
        "company": ['PlaySimple'],
        "tag": ['Tree', 'Data Structures']
    },
    "Siri and her new College": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find the element that appears once in sorted array": {
        "company": ['Amazon', 'D-E-Shaw', 'Ola Cabs'],
        "tag": ['Searching', 'Divide and Conquer', 'Algorithms']
    },
    "Largest zigzag sequence": {
        "company": ['Directi'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find all pairs with a given sum": {
        "company": ['Amazon', 'MakeMyTrip', 'Facebook', 'United Health Group'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Sequence of Sequence": {
        "company": [],
        "tag": ['Divide and Conquer', 'Algorithms']
    },
    "Subset with no pair sum divisible by K": {
        "company": [],
        "tag": ['Arrays', 'Modular Arithmetic', 'Data Structures', 'Algorithms']
    },
    "Equal point in a string of brackets": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Check if frequencies can be equal": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "The Drunkard": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Minimum Operations": {
        "company": [],
        "tag": ['Dynamic Programming', 'Greedy', 'Algorithms']
    },
    "ADA Noise": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Recursive sequence": {
        "company": ['MAQ Software'],
        "tag": ['Mathematical', 'Recursion', 'Algorithms']
    },
    "Possible Pairs": {
        "company": [],
        "tag": ['Mathematical', 'Factorization', 'Algorithms']
    },
    "Element in a Sequence": {
        "company": [],
        "tag": ['Mathematical', 'series', 'Algorithms']
    },
    "Consecutive numbers for sum": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Transitive closure of a Graph": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Karatsuba Algorithm": {
        "company": [],
        "tag": ['Strings', 'Divide and Conquer', 'Data Structures', 'Algorithms']
    },
    "Count number of words": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Regular polygon-1": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sorting all array elements except one": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Number of permutation with K inversions": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Combine the strings": {
        "company": ['Walmart'],
        "tag": ['Strings', 'Data Structures']
    },
    "Count the paths": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'DFS',
            'Graph',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Sum of average of all subsets": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Sort the pile of cards": {
        "company": ['BankBazaar'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find pairs with given relation": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Find the highest occurring digit in prime numbers in a range": {
        "company": ['Walmart'],
        "tag": ['Prime Number', 'sieve']
    },
    "Array Subset of another array": {
        "company": ['Accolite', 'Qualcomm', 'GE'],
        "tag": [
            'Arrays',
            'Searching',
            'Hash',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "N-divisors": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Game with String": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Heap', 'Data Structures']
    },
    "Sum of product of all pairs": {
        "company": [],
        "tag": ['Misc']
    },
    "Length of longest subarray": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Element with left side smaller and right side greater": {
        "company": ['Zoho', 'Amazon', 'OYO Rooms', 'Intuit'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Divisible by 5 or not": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "First negative integer in every window of size k": {
        "company": ['Amazon'],
        "tag": [
            'sliding-window',
            'two-pointer-algorithm',
            'Arrays',
            'Queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Paths to reach origin": {
        "company": [],
        "tag": [
            'Arrays',
            'Dynamic Programming',
            'Matrix',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Rotate matrix elements clockwise": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Sum equals to Sum": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Maximum Sum LCM": {
        "company": [],
        "tag": ['Misc']
    },
    "Number of divisors in a given range": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Ishaan's Birthday": {
        "company": [],
        "tag": ['Algorithms']
    },
    "Number starting with 1 in b-base": {
        "company": [],
        "tag": ['Misc']
    },
    "Bell Numbers": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum value product": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Minimum changes to make all substrings distinct": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Corners of a Rectangle": {
        "company": [],
        "tag": ['Geometric']
    },
    "Second most repeated string in a sequence": {
        "company": ['Amazon', 'Goldman Sachs'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Searching in an array where adjacent differ by at most k": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'CPP', 'Data Structures', 'Algorithms']
    },
    "Days of Our Lives": {
        "company": [],
        "tag": ['Algorithms']
    },
    "The Light Problem": {
        "company": [],
        "tag": ['Arrays', 'Misc', 'Data Structures']
    },
    "Check if any valid sequence is divisible by M": {
        "company": [],
        "tag": [
            'Arrays',
            'Dynamic Programming',
            'Division',
            'modular arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum Toogles to partition": {
        "company": [
            'Paytm', 'Amazon',
            'Ola Cabs', 'Walmart',
            'Adobe', 'Linkedin',
            'Cisco'
        ],
        "tag": ['Dynamic Programming', 'Combinatorial', 'Algorithms']
    },
    "Ticket sellers": {
        "company": ['BankBazaar', 'Linkedin'],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Optimal Selection": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Euler Totient Function": {
        "company": ['Cisco'],
        "tag": []
    },
    "Greedy Fox": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "k sorted array": {
        "company": [],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "k modulus array element": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "BBT counter": {
        "company": [],
        "tag": ['Mathematical', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Maximum possible sum": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Sort the given array after applying the given equation": {
        "company": ['Adobe'],
        "tag": ['Mathematical', 'Sorting', 'Algorithms']
    },
    "Primes sum": {
        "company": ['Zoho'],
        "tag": ['Prime Number', 'Numbers', 'sieve']
    },
    "Carry counter": {
        "company": ['Microsoft'],
        "tag": ['Numbers']
    },
    "Number and the Digit Sum": {
        "company": [],
        "tag": ['Searching', 'Mathematical', 'Binary Search', 'Algorithms']
    },
    "Money Division": {
        "company": ['Snapdeal'],
        "tag": ['Misc']
    },
    "Find Pair Given Difference": {
        "company": ['Amazon', 'Visa'],
        "tag": ['Sorting', 'Binary Search', 'Algorithms']
    },
    "Divisibility by 999": {
        "company": [],
        "tag": ['Strings', 'Division', 'Data Structures']
    },
    "Fibonacci Expression": {
        "company": [],
        "tag": ['Mathematical', 'Fibonacci', 'Algorithms']
    },
    "Number of Groups": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Decode It": {
        "company": ['Amazon', 'National Instruments'],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of K Primes": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Prime Number', 'Algorithms']
    },
    "Large number division": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Rearrange a string": {
        "company": ['Facebook'],
        "tag": []
    },
    "High Effort vs Low Effort": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "String Ignorance": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Prime factors of LCM of array elements": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "k-th smallest number using digits of a given number": {
        "company": [],
        "tag": ['Numbers', 'Combinatorial']
    },
    "Roll the characters of a String": {
        "company": ['Airtel'],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Sort the way !": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "The invariable units digit": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Smallest sub-array with all occurences of most frequent element": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Word with maximum frequency": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Strings', 'Map', 'Data Structures']
    },
    "A New Year Game": {
        "company": [],
        "tag": ['Misc']
    },
    "Sixy Primes": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Non-Repeating Element": {
        "company": ['Snapdeal', 'Goldman Sachs', 'Adobe'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Form a number divisible by 3 using array digits": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Check if array contains contiguous integers with duplicates allowed": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Rearrange an array such that arr[i] = i": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "nCr": {
        "company": [],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Maximum height of the staircase": {
        "company": ['Goldman Sachs'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find smallest values of x and y": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Kronecker Product": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Even Decimal Binary String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Equal Sums": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "The Bit Game": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "C++ Visible Numbers": {
        "company": [],
        "tag": ['Arrays', 'CPP', 'Data Structures']
    },
    "The Fastest Method": {
        "company": [],
        "tag": ['Mathematical', 'Misc', 'Algorithms']
    },
    "Split the Array": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Check if it is possible to survive on Island": {
        "company": [],
        "tag": ['Greedy', 'Puzzles', 'Algorithms']
    },
    "Count Pairs in an Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "LCS of '0' K Repeated String": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Min sum formed by digits": {
        "company": [],
        "tag": ['Arrays', 'Queue', 'Heap', 'Data Structures']
    },
    "Count ways to express N as the sum of 1,3 and 4": {
        "company": [],
        "tag": ['Dynamic Programming', 'modular arithmetic', 'Algorithms']
    },
    "Shoot, Reload, Repeat": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Mike and Chocolates": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximize permutations": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'permutation',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Ease the Array": {
        "company": ['Zoho', 'Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Reverse alternate words": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Amicable Pair": {
        "company": ['Yahoo'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "The Even Array": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Rope Cutting": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Closest Triplet": {
        "company": [],
        "tag": []
    },
    "Damon Prime": {
        "company": [],
        "tag": ['Prime Number']
    },
    "C++ Matrix Rotation by 180 degree": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Matrix', 'CPP', 'Data Structures', 'Algorithms']
    },
    "String Modification": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Cross the hurdles: The Game": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Counts Zeros Xor Pairs": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Nth Pentagonal Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Primorial of a number": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'factorial', 'Algorithms']
    },
    "Count pairs Sum in matrices": {
        "company": ['FactSet'],
        "tag": ['Hash', 'Sorting', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Check if a number is divisible by 8": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Dr. Zora's Algorithm": {
        "company": [],
        "tag": ['Mathematical', 'Pattern Searching', 'Algorithms']
    },
    "Hungry Pizza Lovers": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Easy string": {
        "company": [],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Integral Root": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Cross the Bridge": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Common Divisor": {
        "company": [],
        "tag": ['number-theory']
    },
    "Ishaan and Sticks": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Mysterious Series": {
        "company": [],
        "tag": ['Prime Number', 'series']
    },
    "Print Bracket Number": {
        "company": ['Flipkart'],
        "tag": ['Strings', 'Stack', 'Regular Expression', 'Data Structures']
    },
    "Possible Timings": {
        "company": [],
        "tag": ['Date-Time']
    },
    "Water Balloons": {
        "company": [],
        "tag": ['Strings', 'Misc', 'Data Structures']
    },
    "Print all bitwise subsets of a number N": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Maximum sum of increasing order elements from n arrays": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Leaf under budget": {
        "company": ['Oracle'],
        "tag": ['Tree', 'Data Structures']
    },
    "Perfect XOR": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Prime Adjacent": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "Interesting Series": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Tilt of Binary Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Move all zeros to the front of the linked list": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "C++ STL Priority Queue": {
        "company": [],
        "tag": ['CPP', 'STL', 'priority-queue', 'Data Structures']
    },
    "Unusual String Sort": {
        "company": [],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Sum of Leaf Nodes at Min Level": {
        "company": ['Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Overlapping rectangles": {
        "company": [
            'Amazon',
            'Microsoft',
            'Snapdeal',
            'Goldman Sachs',
            'OATS Systems',
            'Expedia'
        ],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Product Pair": {
        "company": ['Amazon', 'Visa'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Maximum Possible Sum of Products": {
        "company": ['Accolite', 'Amazon'],
        "tag": ['Mathematical', 'Sorting', 'Algorithms']
    },
    "Inverted triangle of stars": {
        "company": ['Adobe'],
        "tag": ['pattern-printing']
    },
    "Number Of Open Doors": {
        "company": ['TCS'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Y shaped pattern": {
        "company": ['Citrix'],
        "tag": ['pattern-printing']
    },
    "Different Kinds of Object": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Second Largest": {
        "company": ['SAP Labs', 'Rockstand'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Check if array is sorted": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Selection Sort": {
        "company": ['Microsoft', 'Medlife'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Multiply by 11": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Bubble Sort": {
        "company": [
            'Microsoft', 'Wipro',
            'SAP Labs', 'Cisco',
            'Nagarro', 'redBus',
            'Accenture', 'Huawei'
        ],
        "tag": ['Sorting', 'Algorithms']
    },
    "Print all possible strings": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "Row with minimum number of 1's": {
        "company": ['Amazon'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Convert an array to reduced form": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Arya's Long String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Jumping Caterpillars": {
        "company": ['Myntra'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Divisible by 8": {
        "company": ['Citrix'],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Check for BST": {
        "company": [
            'VMWare', 'Flipkart',
            'Accolite', 'Amazon',
            'Microsoft', 'OYO Rooms',
            'Samsung', 'Snapdeal',
            'FactSet', 'Hike',
            'MakeMyTrip', 'Ola Cabs',
            'Walmart', 'Goldman Sachs',
            'MAQ Software', 'Adobe',
            'Linkedin', 'Qualcomm',
            'Boomerang Commerce', 'GreyOrange',
            'Wooker'
        ],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Count More than n/k Occurences": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Earthquake and the Paint Shop": {
        "company": [],
        "tag": ['Map', 'Data Structures']
    },
    "Convert the string": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Numbers with prime frequencies greater than or equal to k": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Ball coloring": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Perfect Numbers": {
        "company": ['Wipro'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Numbers with same first and last digit": {
        "company": ['Amazon'],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Left out candies": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Change Bits": {
        "company": [],
        "tag": ['Bit Magic', 'Numbers', 'Data Structures']
    },
    "Permutation divisibility": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Fraction Trouble": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Ordering of strings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Arithmetic Number": {
        "company": ['FactSet'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Final Destination": {
        "company": ['Zoho', 'Flipkart', 'Amazon', 'Microsoft', 'Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Repeating GCD": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count digits in a factorial": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count digits in a factorial": {
        "company": [],
        "tag": []
    },
    "Repeating GCD": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count digits in a factorial": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Punish the Students": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Sum Pair closest to X": {
        "company": ['Ola Cabs'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Arrange the Balls": {
        "company": [],
        "tag": ['Combinatorial']
    },
    "Number of subsets and mean": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Fraction Trouble": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Faithful Numbers": {
        "company": ['Accolite', 'Amazon', 'Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum value K": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Division Problem": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Cross character": {
        "company": ['Zoho'],
        "tag": ['Strings', 'Data Structures']
    },
    "Permutations and Sum": {
        "company": [],
        "tag": ['Mathematical', 'permutation', 'Algorithms']
    },
    "Same characters in two strings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Number of Heads": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Left Most Digit of a product": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Right most non zero digit": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Modular Arithmetic', 'Algorithms']
    },
    "Maximum average subarray": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Next Prime Palindrome": {
        "company": [],
        "tag": ['Prime Number', 'palindrome']
    },
    "Maximum Number of 1s": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Balanced string": {
        "company": [],
        "tag": ['Strings', 'implementation', 'Data Structures']
    },
    "Extract the Number from the String": {
        "company": ['TCS'],
        "tag": ['Strings', 'Regular Expression', 'Data Structures']
    },
    "Check if actual binary representation of a number is palindrome": {
        "company": [],
        "tag": ['Strings', 'palindrome', 'Data Structures']
    },
    "Number of Factors of N!": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Greater power": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Number that are not divisible": {
        "company": ['Paytm'],
        "tag": []
    },
    "Interesting Prime Numbers": {
        "company": [],
        "tag": ['number-theory']
    },
    "Minimum number of swaps needed": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Last Match": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "K-Pangrams": {
        "company": ['Zoho', 'Snapdeal'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Sub-Array Pairs": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Lexicographically Previous Permutation": {
        "company": [],
        "tag": ['Strings', 'permutation', 'Data Structures']
    },
    "Special array reversal": {
        "company": ['Zoho'],
        "tag": ['two-pointer-algorithm', 'Strings', 'Data Structures', 'Algorithms']
    },
    "Tom and Jerry": {
        "company": ['Flipkart'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Trail of ones": {
        "company": ['Amazon'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Number of ways to find two numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "K closest elements": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Pangram Strings": {
        "company": ['Snapdeal'],
        "tag": ['Strings', 'Data Structures']
    },
    "The Prime Twins": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Shop in Candy Store": {
        "company": [],
        "tag": ['Greedy', 'Sorting', 'Algorithms']
    },
    "Number of 1's in smallest repunits": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Good Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Missing element of AP": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Distinct absolute array elements": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Minimum element in a sorted and rotated array": {
        "company": [
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Adobe',
            'Times Internet'
        ],
        "tag": ['Searching', 'Algorithms']
    },
    "Largest number possible": {
        "company": [],
        "tag": ['Greedy', 'Mathematical', 'Algorithms']
    },
    "Maximum Collatz sequence length": {
        "company": [],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Disarrangement of balls": {
        "company": [],
        "tag": ['Combinatorial']
    },
    "Maximum Diamonds": {
        "company": [],
        "tag": [
            'Mathematical',
            'Queue',
            'STL',
            'Data Structures',
            'Algorithms',
            'Heap'
        ]
    },
    "Value of polynomial": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Search in a matrix": {
        "company": [
            'Paytm', 'Accolite',
            'Amazon', 'Microsoft',
            'Snapdeal', 'MakeMyTrip',
            'Ola Cabs', 'Oracle',
            'Visa', 'Goldman Sachs',
            'Directi', 'Adobe',
            'SAP Labs', 'InMobi',
            'One97', 'Polycom',
            'TinyOwl'
        ],
        "tag": ['Searching', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Minimum Possible Fruits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Moving on grid": {
        "company": [],
        "tag": ['Game Theory']
    },
    "Rectangles in a Circle": {
        "company": [],
        "tag": ['Geometric']
    },
    "Squares in Rectangle": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Cut rope to maximise product": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Three Great Candidates": {
        "company": ['Flipkart', 'Amazon', 'Snapdeal'],
        "tag": ['Arrays', 'Data Structures']
    },
    "AND operation": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Save Knights": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Where Am I ?": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count pairs with given sum": {
        "company": [
            'Flipkart',
            'Accolite',
            'Amazon',
            'FactSet',
            'Hike',
            'MakeMyTrip',
            'Goldman Sachs',
            'Adobe',
            'Salesforce'
        ],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Inorder Traversal and BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Mapped String": {
        "company": [],
        "tag": ['Strings', 'Combinatorial', 'Data Structures']
    },
    "Cutting Rectangles": {
        "company": ['Amdocs'],
        "tag": ['Mathematical', 'Combinatorial', 'Algorithms']
    },
    "Special Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Type of input": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Increment": {
        "company": ['Motlay'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Discovering Atlantis": {
        "company": [],
        "tag": ['Game Theory']
    },
    "Multiply two polynomials": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reach the Nth point": {
        "company": ['Morgan Stanley', 'Amazon', 'Intel'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Swap bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Adjacents are not allowed": {
        "company": ['Epic Systems'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Reverse Bits": {
        "company": ['Amazon', 'Cisco', 'Qualcomm', 'HCL', 'Nvidia'],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Make Number Odd": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Key Pair": {
        "company": [
            'Zoho', 'Flipkart',
            'Morgan Stanley', 'Accolite',
            'Amazon', 'Microsoft',
            'FactSet', 'Hike',
            'Adobe', 'Google',
            'Wipro', 'SAP Labs',
            'CarWale'
        ],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Lucky Number": {
        "company": ['Epic Systems'],
        "tag": ['Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Length Unsorted Subarray": {
        "company": ['Flipkart', 'Microsoft', 'MakeMyTrip', 'Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of two numbers represented as arrays": {
        "company": ['Zoho', 'Accolite', 'Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "N meetings in one room": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'MakeMyTrip', 'Cisco'],
        "tag": ['Greedy', 'Algorithms']
    },
    "Array to BST": {
        "company": ['VMWare', 'Amazon', 'Microsoft', 'Snapdeal', 'Adobe', 'Cisco'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Triangular Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Facing the sun": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Addition of submatrix": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Replace by X": {
        "company": ['Amazon', 'FactSet'],
        "tag": ['Searching', 'Strings', 'Data Structures', 'Algorithms']
    },
    "Kth distance": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Let's Go Shopping!": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Does robot moves circular": {
        "company": ['Amazon', 'Visa'],
        "tag": ['Strings', 'Data Structures']
    },
    "Longest Distinct characters in string": {
        "company": ['Amazon', 'Microsoft', 'Housing.com', 'Adobe'],
        "tag": ['Strings', 'Data Structures']
    },
    "Count distinct pairs with difference k": {
        "company": ['Amazon', 'Facebook'],
        "tag": ['Hash', 'Map', 'Data Structures']
    },
    "Is Square": {
        "company": ['Zoho', 'Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Does robot moves circular": {
        "company": ['Amazon', 'Visa'],
        "tag": ['Strings', 'Data Structures']
    },
    "Remove Duplicates": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Construct BST from Postorder": {
        "company": ['FactSet', 'SAP Labs'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Root to leaf paths sum": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms', 'Google'],
        "tag": ['Tree', 'Data Structures']
    },
    "Maximum Gap": {
        "company": ['HunanAsset'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Trailing zeroes in factorial": {
        "company": ['Microsoft', 'MakeMyTrip'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Pascal Triangle": {
        "company": ['Amazon', 'Microsoft', 'Adobe'],
        "tag": ['Arrays', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "K-Nearest Neighbours": {
        "company": ['Directi'],
        "tag": ['Machine Learning']
    },
    "XOR of a given range": {
        "company": [],
        "tag": [
            'Tree',
            'Segment-Tree',
            'Data Structures',
            'Advanced Data Structure'
        ]
    },
    "Range of Composite numbers": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'Algorithms']
    },
    "Insert in Sorted way in a Sorted DLL": {
        "company": [],
        "tag": ['doubly-linked-list', 'Linked List', 'Data Structures']
    },
    "Normal BST to Balanced BST": {
        "company": ['Paytm'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Pairwise swap elements of a linked list": {
        "company": ['Moonfrog Labs', 'Amazon', 'Microsoft', 'Intuit'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Delete N nodes after M nodes of a linked list": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Sorted insert for circular linked list": {
        "company": ['Zoho', 'Amazon', 'Microsoft'],
        "tag": ['circular-linked-list', 'Linked List', 'Data Structures']
    },
    "Linked List that is Sorted Alternatingly": {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Merge 2 sorted linked list in reverse order": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Merge Sort', 'Data Structures', 'Algorithms']
    },
    "Rearrange linked list in-place": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Reverse a Doubly Linked List": {
        "company": ['D-E-Shaw', 'Adobe'],
        "tag": ['doubly-linked-list', 'Linked List', 'Data Structures']
    },
    "linked list of strings forms a palindrome": {
        "company": [],
        "tag": ['Linked List', 'palindrome', 'Data Structures']
    },
    "Detect Loop in linked list": {
        "company": [
            'Paytm', 'VMWare',
            'Accolite', 'Amazon',
            'Snapdeal', 'D-E-Shaw',
            'Hike', 'MakeMyTrip',
            'Walmart', 'MAQ Software',
            'Adobe', 'SAP Labs',
            'Qualcomm', 'Veritas',
            'Mahindra Comviva', 'Lybrate'
        ],
        "tag": [
            'Linked List',
            'two-pointer-algorithm',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Compare two linked lists": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Check for Balanced Tree": {
        "company": ['Amazon', 'Microsoft', 'Walmart'],
        "tag": ['Tree', 'Data Structures']
    },
    "Insertion Sort": {
        "company": [
            'Microsoft',
            'MAQ Software',
            'Juniper Networks',
            'Cisco',
            'Accenture',
            'Dell',
            'Veritas',
            'Grofers'
        ],
        "tag": ['Sorting', 'Algorithms']
    },
    "Left View of Binary Tree": {
        "company": [
            'Paytm', 'Flipkart',
            'Accolite', 'Amazon',
            'OYO Rooms', 'Samsung',
            'Snapdeal', 'MakeMyTrip',
            'Ola Cabs', 'Adobe',
            'Qualcomm', 'Twitter',
            'Knowlarity', 'Open Solutions'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Right View of Binary Tree": {
        "company": ['Accolite', 'Amazon', 'Snapdeal', 'MakeMyTrip', 'Adobe'],
        "tag": ['Tree', 'Data Structures']
    },
    "Nth node from end of linked list": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Accolite', 'Amazon',
            'OYO Rooms', 'Samsung',
            'Snapdeal', 'FactSet',
            'Hike', 'MAQ Software',
            'Adobe', 'Qualcomm',
            'Epic Systems', 'Citicorp',
            'Monotype Solutions'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Queue using two Stacks": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Accolite', 'Amazon',
            'Microsoft', 'D-E-Shaw',
            'Hike', 'MakeMyTrip',
            'Oracle', 'Walmart',
            'Goldman Sachs', 'MAQ Software',
            'Adobe', 'InfoEdge',
            'InMobi'
        ],
        "tag": ['Stack', 'Queue', 'STL', 'Data Structures']
    },
    "Delete Middle of Linked List": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": [
            'Linked List',
            'two-pointer-algorithm',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Delete without head pointer": {
        "company": [
            'Amazon',
            'Microsoft',
            'Samsung',
            'Visa',
            'Goldman Sachs',
            'Kritikal Solutions'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "K distance from root": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'Ola Cabs'],
        "tag": ['Tree', 'Data Structures']
    },
    "Maximum Width of Tree": {
        "company": ['VMWare', 'Flipkart', 'Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Reverse Level Order Traversal": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'FactSet', 'Adobe', 'Cisco'],
        "tag": ['Tree', 'Data Structures']
    },
    "Decimal Equivalent of Binary Linked List": {
        "company": ['Juniper Networks'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Intersection of two sorted Linked lists": {
        "company": ['Amazon', 'Microsoft', 'D-E-Shaw', 'Zopper'],
        "tag": ['Linked List', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Linked List in Zig-Zag fashion": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Stack using two queues": {
        "company": [
            'Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Snapdeal',
            'D-E-Shaw',
            'Oracle',
            'Adobe',
            'Cisco',
            'Grofers',
            'CouponDunia',
            'Kritikal Solutions'
        ],
        "tag": ['Stack', 'Queue', 'Design-Pattern', 'Data Structures']
    },
    "Ritika's Money": {
        "company": [],
        "tag": ['Misc']
    },
    "Postorder traversal from given Inorder and Preorder traversals": {
        "company": ['Payu'],
        "tag": ['Tree', 'Data Structures']
    },
    "Split a Circular Linked List into two halves": {
        "company": ['Yahoo'],
        "tag": ['circular-linked-list', 'Linked List', 'Data Structures']
    },
    "Insert a node in a BST": {
        "company": ['Paytm', 'Accolite', 'Amazon', 'Microsoft', 'Samsung'],
        "tag": ['Binary Search Tree', 'Design-Pattern', 'Data Structures']
    },
    "Transform to Sum Tree": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'FactSet', 'Walmart'],
        "tag": ['Tree', 'Data Structures']
    },
    "Smallest subarray with all occurrences of a most frequent element": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Binary Tree to BST": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Sum of all divisors from 1 to n": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reorganize The Array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Maximum distinct elements after removing K elements": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Heap', 'Data Structures']
    },
    "Mighty Divisor": {
        "company": [],
        "tag": [
            'number-theory',
            'Mathematical',
            'Numbers',
            'Division',
            'Algorithms'
        ]
    },
    "Count unset bits in a given Range": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "The Palindrome Pattern": {
        "company": [],
        "tag": ['Matrix', 'Functions', 'Data Structures']
    },
    "Count numbers with unit digit K in given range": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Maximum difference of zeros and ones in binary string": {
        "company": [],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Kadane',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Largest sum of digits in all Divisors": {
        "company": [],
        "tag": ['number-theory']
    },
    "Add two numbers represented by two arrays": {
        "company": [],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Nearest multiple of 10": {
        "company": ['Microsoft'],
        "tag": [
            'Arrays',
            'Strings',
            'Mathematical',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Swap the closest and farthest digits": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Level order traversal in spiral form": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Accolite', 'Amazon',
            'Microsoft', 'Hike',
            'Housing.com', 'MakeMyTrip',
            'Ola Cabs', 'Payu',
            'Teradata', 'Walmart',
            'Adobe'
        ],
        "tag": ['Recursion', 'Stack', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Check if the number is balanced": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Remainder of array multiplication": {
        "company": [],
        "tag": ['number-theory', 'modular arithmetic']
    },
    "Semi Prime": {
        "company": [],
        "tag": ['Prime Number']
    },
    "Remove Duplicates": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Next greater number set digits": {
        "company": [
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Snapdeal',
            'Hike',
            'Adobe',
            'Zillious',
            'Oxigen Wallet',
            'Vizury Interactive Solutions'
        ],
        "tag": ['Searching', 'Algorithms']
    },
    "Single Number": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Finding Position": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Recursion', 'Algorithms']
    },
    "Next sparse binary number": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Amend The Sentence": {
        "company": ['Adobe'],
        "tag": ['Strings', 'Data Structures']
    },
    "Bitonic Point": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Pairs with difference k": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Equal Sum and Product": {
        "company": [],
        "tag": ['Arrays', 'subset', 'Data Structures']
    },
    "Remove b and ac from a given string": {
        "company": ['Amazon', 'Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Remove all duplicates from a given string": {
        "company": ['Amazon', 'Microsoft', 'Adobe'],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Check if a given string is a rotation of a palindrome": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Move all zeroes to end of array": {
        "company": [
            'Paytm',
            'Amazon',
            'Microsoft',
            'Samsung',
            'SAP Labs',
            'Linkedin',
            'Bloomberg'
        ],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count Substrings": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Exponentiation (Set 2)": {
        "company": ['MakeMyTrip'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Good Pairs": {
        "company": [],
        "tag": ['Searching', 'Sorting', 'Algorithms']
    },
    "Count Odd Factors": {
        "company": ['Wipro'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Distinct Substrings": {
        "company": ['Linkedin'],
        "tag": ['Hash', 'Strings', 'Map', 'Data Structures']
    },
    "Magic Number": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Search in a Rotated Array": {
        "company": [
            'Paytm', 'Flipkart',
            'Amazon', 'Microsoft',
            'Snapdeal', 'D-E-Shaw',
            'FactSet', 'Hike',
            'MakeMyTrip', 'Intuit',
            'Adobe', 'Google',
            'BankBazaar', 'Times Internet'
        ],
        "tag": ['Searching', 'Divide and Conquer', 'Algorithms']
    },
    "Maximize Toys": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Sorting', 'Algorithms']
    },
    "Subarray with least average": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Rectangles in  N*N Board": {
        "company": ['VMWare', 'Goldman Sachs'],
        "tag": ['number-theory', 'Mathematical', 'permutation', 'Algorithms']
    },
    "Level order traversal Line by Line": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft', 'Snapdeal', 'Hike'],
        "tag": ['Tree', 'Data Structures']
    },
    "Largest subarray of 0's and 1's": {
        "company": ['Paytm', 'Morgan Stanley', 'Amazon', 'MakeMyTrip'],
        "tag": ['sliding-window', 'Hash', 'Data Structures', 'Algorithms']
    },
    "Max sum path in two arrays": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Special Stack": {
        "company": [
            'Paytm', 'VMWare',
            'Flipkart', 'Amazon',
            'Microsoft', 'FactSet',
            'MakeMyTrip', 'Walmart',
            'Goldman Sachs', 'Intuit',
            'Adobe', 'SAP Labs',
        ],
        "tag": ['Stack', 'STL', 'Data Structures']
    },
    "Reverse alternate levels of a perfect binary tree": {
        "company": ['Amazon', 'Hike'],
        "tag": ['Tree', 'Data Structures']

    },
    "Remove duplicate element from sorted Linked List": {
        "company": ['Microsoft', 'OYO Rooms', 'Oracle', 'Visa', 'Adobe', 'Myntra'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Remove duplicates in small prime array": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Hash', 'Prime Number', 'Data Structures']
    },
    "Largest subarray with 0 sum": {
        "company": ['Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Almost Prime Numbers": {
        "company": [],
        "tag": ['Arrays', 'Prime Number', 'Data Structures']
    },
    "Minimum Depth of a Binary Tree": {
        "company": ['Amazon', 'Microsoft', 'Facebook'],
        "tag": ['Tree', 'Data Structures']
    },
    "Determine if Two Trees are Identical": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Print BST elements in given range": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Lowest Common Ancestor in a BST": {
        "company": [
            'Flipkart',
            'Accolite',
            'Amazon',
            'Microsoft',
            'Samsung',
            'MAQ Software',
            'Synopsys'
        ],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Root to leaf path sum": {
        "company": [
            'Accolite', 'Amazon',
            'Microsoft', 'Samsung',
            'FactSet', 'Housing.com',
            'Oracle', 'Goldman Sachs',
            'Adobe', 'CouponDunia',
            'Atlassian'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Match specific pattern": {
        "company": ['Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Find Transition Point": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Minimum four sum subsequence": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Multiply two linked lists": {
        "company": ['Amazon'],
        "tag": [
            'Linked List',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Remove every k'th node": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Leaf at same level": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Find Maximum value": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of subset differences": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Occurence of an integer in a Linked List": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Java Collection | Set 2 (Set)": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Generate Grey Code Sequences": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Strings', 'Bit Magic', 'Data Structures']
    },
    "Java Collection | Set 1 (ArrayList) Part-2": {
        "company": [],
        "tag": ['Java', 'Java-Collections']
    },
    "Max distance between same elements": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Expression Tree": {
        "company": ['Flipkart', 'Amazon', 'Snapdeal', 'Synopsys'],
        "tag": ['Tree', 'Data Structures']
    },
    "Print matrix in diagonal pattern": {
        "company": ['Amazon'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Check whether BST contains Dead End": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Josephus problem": {
        "company": ['Amazon', 'Microsoft', 'Walmart'],
        "tag": ['Recursion', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "C++ STL | Set 2 (pair)": {
        "company": [],
        "tag": ['CPP', 'STL']
    },
    "ZigZag Tree Traversal": {
        "company": [
            'Flipkart', 'Amazon',
            'Microsoft', 'Snapdeal',
            'FactSet', 'Hike',
            'Walmart', 'Cisco'],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "You and your books": {
        "company": ['Junglee Games'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Three way partitioning": {
        "company": ['Yahoo'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Kth largest element in BST": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'Samsung', 'SAP Labs'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Delete a Node in Single Linked List": {
        "company": ['Samsung'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Find duplicates in an array": {
        "company": ['Paytm', 'Zoho', 'Flipkart', 'Amazon', 'D-E-Shaw', 'Qualcomm'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find Common Nodes in two BSTs": {
        "company": ['Amazon'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Max Level Sum in Binary Tree": {
        "company": ['VMWare', 'Flipkart', 'Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Maximize the volume of Cuboid": {
        "company": [],
        "tag": ['Mathematical', 'Division', 'Algorithms']
    },
    "Telephone Number or Involution Number": {
        "company": [],
        "tag": ['Dynamic Programming', 'series', 'Algorithms']
    },
    "Intersection of Two Linked Lists": {
        "company": [
            'VMWare',
            'Flipkart',
            'Accolite',
            'Amazon',
            'Microsoft',
            '24*7 Innovation Labs',
            'D-E-Shaw',
            'Walmart',
            'Taxi4Sure'
        ],
        "tag": ['Linked List', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Sort a stack": {
        "company": [
            'Amazon',
            'Microsoft',
            'Goldman Sachs',
            'Intuit',
            'Yahoo',
            'IBM',
            'Kuliza'
        ],
        "tag": ['Recursion', 'Stack', 'STL', 'Data Structures', 'Algorithms']
    },
    "Disjoint set (Union-Find)": {
        "company": ['Samsung'],
        "tag": ['union-find', 'Algorithms']
    },
    "Peak element": {
        "company": ['Accolite', 'Amazon', 'Visa', 'Adobe', 'Google'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Index Of an Extra Element": {
        "company": ['Zoho', 'Amazon'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Mountain Subarray Problem": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Counting Sort": {
        "company": ['Microsoft', 'Goldman Sachs', 'Cisco'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Split Singly Linked List Alternatingly": {
        "company": [],
        "tag": ['Linked List', 'Data Structures']
    },
    "Sum of leaf nodes in BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Sum of digits in factorial of a number": {
        "company": [],
        "tag": ['factorial']
    },
    "Level of a Node in Binary Tree": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Max and min element in Binary Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Full binary tree": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Symmetric Tree": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "XOR Linked List": {
        "company": ['Accolite', 'Amazon', 'GE'],
        "tag": ['doubly-linked-list', 'Linked List', 'Data Structures']
    },
    "Next Right Node": {
        "company": [],
        "tag": ['Traversal', 'Queue', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Perfect Binary Tree": {
        "company": ['FactSet'],
        "tag": ['Tree', 'Data Structures']
    },
    "Depth of node": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Check if Tree is Isomorphic": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Maximum Node Level": {
        "company": ['VMWare', 'Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Vertical sum": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Count Pairs whose sum is equal to X": {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Deletion and Reverse in Linked List": {
        "company": ['Intuit'],
        "tag": [
            'circular-linked-list',
            'Linked List',
            'circular linked list',
            'Data Structures'
        ]
    },
    "Children Sum Parent": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Linked List Matrix": {
        "company": ['FactSet'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Diagonal Sum In Binary Tree": {
        "company": ['Accolite', 'Amazon'],
        "tag": ['Recursion', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Find length of Loop": {
        "company": ['Amazon', 'Adobe', 'Qualcomm'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Sum of Left Leaf Nodes": {
        "company": ['Amazon'],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Deletion in a Binary Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Remove Half Nodes": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Reverse First K elements of Queue": {
        "company": ['Amazon'],
        "tag": ['Stack', 'Queue', 'Data Structures']
    },
    "Reverse a string using Stack": {
        "company": [],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Brothers From Different Roots": {
        "company": [],
        "tag": ['Traversal', 'Binary Search Tree', 'Data Structures', 'Algorithms']
    },
    "Nodes at Odd Levels": {
        "company": ['Flipkart', 'Accolite'],
        "tag": ['Tree', 'Data Structures']
    },
    "Closest Neighbour in BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Height of Spiral Tree": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Closest Strings": {
        "company": ['Amazon', 'Linkedin'],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Minimum Exchange": {
        "company": [],
        "tag": ['Misc']
    },
    "Exchange the Leaf Nodes": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Check if two Nodes are Cousins": {
        "company": ['Amazon', 'D-E-Shaw'],
        "tag": ['Tree', 'Data Structures']
    },
    "String comparison": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of Divisors in an array": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Consecutive Array Elements": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Bird and maximum fruit gathering": {
        "company": ['Facebook'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Assign Mice Holes": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Minimum number of deletions to make a sorted sequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum steps to minimize n as per given condition": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum insertions to sort an array": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum AND Value": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Pairs which are Divisible by 4": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Transform the array": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Colorful Strings": {
        "company": ['Directi'],
        "tag": ['Strings', 'permutation', 'Data Structures']
    },
    "Maximum sum of subarray less than or equal to x": {
        "company": [],
        "tag": [
            'sliding-window',
            'two-pointer-algorithm',
            'Arrays',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Power Set": {
        "company": ['Snapdeal'],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Find maximum number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Nth Smart Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Even and odd elements at even and odd positions": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Winter is Coming": {
        "company": [],
        "tag": ['Misc']
    },
    "Count the number of ways to tile the floor of size n x m using 1 x m size tiles": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Count the triplets": {
        "company": ['Amazon', 'Arcesium'],
        "tag": ['two-pointer-algorithm', 'Sorting', 'Algorithms']
    },
    "Find Last Digit Of a^b for Large Numbers": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Merging two unsorted arrays in sorted order": {
        "company": ['Flipkart', 'Amazon', 'Amdocs'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Smallest number by rearranging digits of a given number": {
        "company": ['GE'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Palindromic Primes": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Replace a word": {
        "company": ['Adobe'],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of Lengths of Non-Overlapping SubArrays": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Even Fibonacci Numbers Sum": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Kth LSB": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Compatible friends": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Second Binary Digit": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Boundary Elements of Matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "K-Ary Tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Adding Array Elements": {
        "company": [],
        "tag": ['Arrays', 'Heap', 'Data Structures']
    },
    "Common Subsequence": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Smallest number in one swap": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Largest number in one swap": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Chocolate Station": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum Deletions": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Right angled  triangles": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Generate all palindromic numbers less than n": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Min Manipulations to make Strings Anagram": {
        "company": ['Flipkart', 'Yatra.com'],
        "tag": ['Strings', 'anagram', 'Data Structures']
    },
    "Query and Array": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Required Rooms": {
        "company": [],
        "tag": ['Mathematical', 'Misc', 'Algorithms']
    },
    "Sub-arrays with equal number of occurences": {
        "company": [],
        "tag": ['Arrays', 'STL', 'Data Structures']
    },
    "Flipping bits in Binary Format": {
        "company": [],
        "tag": ['Misc']
    },
    "Maximum size of consecutives": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Carol Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Modular Arithmetic', 'Algorithms']
    },
    "Three consecutive duplicates": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Star elements": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Psuedobinary Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Merge two binary Max heaps": {
        "company": [],
        "tag": ['Arrays', 'Heap', 'Data Structures']
    },
    "First K Digits": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Largest Proper fraction": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Remove minimum number of elements": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Maximize XOR": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Maximum Height Tree": {
        "company": ['Walmart'],
        "tag": ['Misc']
    },
    "Prime number of set bits": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['Prime Number', 'sieve']
    },
    "Find the minimum time": {
        "company": ['Oracle'],
        "tag": ['Mathematical', 'Binary Search', 'Algorithms']
    },
    "Mersenne Prime": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reversing the equation": {
        "company": [],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Geek and its Game of Coins": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Emirp numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Divisible by 7": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Cereals Box": {
        "company": [],
        "tag": ['priority-queue', 'Data Structures']
    },
    "Check if divisible by 10": {
        "company": [],
        "tag": ['Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Quick Exponents": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Check if a Integer is power of 8 or not": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Number of subarrays whose minimum and maximum are same": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Incomplete Array": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Modified Numbers and Queries": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Pairs with Positive Negative values": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum Indexes": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Sequence Fun": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Pairs with Difference less than K": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Convertible string": {
        "company": ['Bidgely'],
        "tag": ['Strings', 'Data Structures']
    },
    "Mean of range in array": {
        "company": [],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Array's Game": {
        "company": [],
        "tag": ['Mathematical', 'Game Theory', 'Algorithms']
    },
    "Grouping values": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Count Primes In Range": {
        "company": [],
        "tag": ['sieve']
    },
    "Count the pairs with maximum difference": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Express N as sum of 4 prime numbers": {
        "company": [],
        "tag": ['Prime Number', 'Numbers']
    },
    "Woodall Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Longest sub-sequence such that difference between adjacents is one": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count Pairs": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find unit digit in a Product": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Algorithms']
    },
    "Longest common prefix": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Winner of an election": {
        "company": [],
        "tag": ['Strings', 'Map', 'Data Structures']
    },
    "Cluster all the 1 in a given string": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Three Number Even Sum": {
        "company": [],
        "tag": ['Mathematical', 'Combinatorial', 'Algorithms']
    },
    "Geek and his Tricky Series": {
        "company": [],
        "tag": ['series']
    },
    "Cumulative frequency of count of each element in an unsorted array": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Maximum number of characters between any two same character": {
        "company": ['Zoho'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Help the Old Man!!!": {
        "company": ['MakeMyTrip'],
        "tag": ['Recursion', 'Algorithms']
    },
    "Beautiful Sequence": {
        "company": [],
        "tag": ['number-theory', 'sieve']
    },
    "Minimum element whose N-th power is greater than product of an array": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Completing tasks": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Count numbers which can be constructed using two numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "K-Palindrome": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Last seen array element": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Nth character in Concatenated Decimal String": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find the smallest root": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Summed Matrix": {
        "company": [],
        "tag": [
            'number-theory',
            'Mathematical',
            'Matrix',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Fact Digit Sum": {
        "company": [],
        "tag": ['Greedy', 'Mathematical', 'Recursion', 'Algorithms']
    },
    "Closing bracket index": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Number of pairs with maximum sum": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Check if possible to move from given coordinate to desired coordinate": {
        "company": ['MakeMyTrip'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Level order traversal": {
        "company": [
            'Flipkart', 'Morgan Stanley',
            'Accolite', 'Amazon',
            'Microsoft', 'Samsung',
            'D-E-Shaw', 'Ola Cabs',
            'Payu', 'Adobe',
            'Cisco', 'Qualcomm'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Finding middle element in a linked list": {
        "company": [
            'VMWare', 'Zoho',
            'Flipkart', 'Morgan Stanley',
            'Amazon', 'Microsoft',
            'Samsung', 'Hike',
            'Payu', 'MAQ Software',
            'Adobe', 'Wipro',
            'SAP Labs', 'Qualcomm',
            'Nagarro', 'GE',
            'Veritas', 'IgniteWorld',
            'Netskope'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Two Mirror Trees": {
        "company": ['Amazon', 'D-E-Shaw', 'Hike'],
        "tag": ['Tree', 'Data Structures']
    },
    "Ancestors in Binary Tree": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Height of Binary Tree": {
        "company": [
            'VMWare',
            'Zoho',
            'Amazon',
            'Microsoft',
            'Snapdeal',
            'D-E-Shaw',
            'FactSet',
            'MakeMyTrip',
            'Teradata',
            'Synopsys',
            'CouponDunia',
            'Cadence India',
            'Monotype Solutions',
            'FreeCharge'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Root to Leaf Paths": {
        "company": ['Paytm', 'Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Equilibrium index of an array": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Remove duplicate elements from sorted Array": {
        "company": [
            'Zoho',
            'Morgan Stanley',
            'Microsoft',
            'Samsung',
            'Google',
            'Wipro',
            'Xome'
        ],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Repetition of k length substring": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Run Length Encoding": {
        "company": [
            'VMWare',
            'Zoho',
            'Amazon',
            'Microsoft',
            'FactSet',
            'Goldman Sachs',
            'CouponDunia'
        ],
        "tag": ['Strings', 'Data Structures']
    },
    "Print all nodes that don't have sibling": {
        "company": ['Amazon', 'D-E-Shaw'],
        "tag": ['Tree', 'Data Structures']
    },
    "Sum of Leaf Nodes": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Merge Lists Alternatingly": {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Count distinct elements in every window": {
        "company": ['Accolite', 'Amazon', 'Microsoft'],
        "tag": ['sliding-window', 'Hash', 'Data Structures', 'Algorithms']
    },
    "Minimum distance between two numbers": {
        "company": ['Paytm', 'Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Palindrome String": {
        "company": [
            'Paytm',
            'Zoho',
            'Morgan Stanley',
            'Amazon',
            'D-E-Shaw',
            'FactSet',
            'Cisco',
            'Facebook'
        ],
        "tag": ['Strings', 'Data Structures']
    },
    "Insert in a Sorted List": {
        "company": ['Amazon', 'Wipro', 'SAP Labs'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Mirror Tree": {
        "company": [
            'Paytm', 'VMWare',
            'Morgan Stanley', 'Accolite',
            'Samsung', 'Snapdeal',
            'Ola Cabs', 'Walmart',
            'Goldman Sachs', 'Adobe',
            'Google', 'SAP Labs',
            'Myntra', 'Belzabar',
            'eBay', 'PropTiger'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Palindromic Subsequences": {
        "company": [],
        "tag": ['Strings', 'palindrome', 'Data Structures']
    },
    "Count increasing Subarrays": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Alternate positive and negative numbers": {
        "company": ['Paytm', 'VMWare', 'Amazon', 'Microsoft', 'Intuit'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Number of factors": {
        "company": [],
        "tag": ['Misc']
    },
    "Max Sum without Adjacents": {
        "company": [
            'Flipkart',
            'Amazon',
            'OYO Rooms',
            'FactSet',
            'Walmart',
            'Adobe',
            'Oxigen Wallet',
            'Yahoo'
        ],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Number of paths": {
        "company": ['Zoho', 'Amazon', 'Microsoft'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Generate binary string": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Minimize the sum of product": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Coverage of all Zeros in a Binary Matrix": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Natural Sum": {
        "company": [],
        "tag": ['Misc']
    },
    "Drive the car": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of elements between k1'th and k2'th smallest elements": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Find first repeated character": {
        "company": ['Amazon', 'Adobe'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Trace Path": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Left most and right most index": {
        "company": ['Amazon', 'Microsoft', 'Google'],
        "tag": [
            'Arrays',
            'Searching',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Form a Triangle": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Geeky Year": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Common elements": {
        "company": ['VMWare', 'Microsoft', 'MAQ Software'],
        "tag": ['Searching', 'Algorithms']
    },
    "Fill array with 1's": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Count even substrings": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Largest Fibonacci Subsequence": {
        "company": ['Facebook'],
        "tag": ['Arrays', 'Hash', 'Fibonacci', 'Data Structures']
    },
    "Balance with respect to an array": {
        "company": [],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Count the elements": {
        "company": ['Amazon', 'Yatra.com'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Faulty wiring and Bulbs": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Four Elements": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Absolute distinct count": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Set all the bits in given range of a number": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Max Sum Subarray of size K": {
        "company": ['OYO Rooms'],
        "tag": ['prefix-sum', 'sliding-window', 'Misc', 'Algorithms']
    },
    "Break Numbers[Duplicate problem]": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Largest Permutation": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Maximum product": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Toppers Of Class": {
        "company": ['D-E-Shaw'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Bitonic Generator Sort": {
        "company": ['Zoho'],
        "tag": ['Arrays', 'Sorting', 'STL', 'Data Structures', 'Algorithms']
    },
    "Twice Counter": {
        "company": ['Amazon'],
        "tag": ['Hash', 'Strings', 'Map', 'Data Structures']
    },
    "Total number of Strings": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'permutation', 'Algorithms']
    },
    "Primitive Typing": {
        "company": ['Accolite'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Minimum Distinct Ids": {
        "company": ['Morgan Stanley'],
        "tag": ['Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Longest Common Prefix in an Array": {
        "company": ['VMWare', 'Microsoft', 'Google'],
        "tag": ['Arrays', 'Strings', 'Data Structures']
    },
    "Maximum number of zeroes": {
        "company": ['Oracle'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Print the pattern": {
        "company": ['CGI'],
        "tag": ['pattern-printing']
    },
    "Pell Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Balancing Pan": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Find the Highest number": {
        "company": ['Amazon'],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Reverse a linked list": {
        "company": [
            'Paytm', 'VMWare',
            'Zoho', 'Accolite',
            'Amazon', 'Microsoft',
            'Samsung', 'Snapdeal',
            'D-E-Shaw', 'MakeMyTrip',
            'Teradata', 'Walmart',
            'Goldman Sachs', 'Intuit',
            'Adobe', 'SAP Labs',
            'Tejas Network', 'Cisco',
            'Qualcomm', 'Cognizant',
            'Mahindra Comviva', 'IgniteWorld'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Sum of Right Leaf Nodes": {
        "company": [],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Rearrange string as alternate x and y occurences": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Minimum rotations to unlock a circular lock": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Meta Strings": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Count of strings that can be formed using a, b and c under given constraints": {
        "company": ['Amazon', 'Google'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Compute (a*b)%c": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    }
}


const dataset_medium = {
    "Number of occurrence": {
        "company": ['Zoho', 'Amazon', 'MakeMyTrip'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Nth catalan number": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Longest Common Subsequence": {
        "company": ['Paytm', 'VMWare', 'Amazon', 'Microsoft', 'Citrix', 'MakeMyTrip'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Coin Change": {
        "company": [
            'Paytm',
            'Flipkart',
            'Morgan Stanley',
            'Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Samsung',
            'Snapdeal'
        ],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Longest Increasing Subsequence": {
        "company": [
            'Paytm',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Samsung',
            'BankBazaar'
        ],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Non Repeating Numbers": {
        "company": [
            'Accolite',
            'Amazon',
            'Microsoft',
            'Samsung',
            'FactSet',
            'MakeMyTrip',
            'Google',
            'Qualcomm'
        ],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Reverse a Stack": {
        "company": [],
        "tag": ['Recursion', 'Stack', 'Data Structures', 'Algorithms']
    },
    "Largest prime factor": {
        "company": ['Yahoo'],
        "tag": ['Mathematical', 'Prime Number', 'sieve', 'Algorithms']
    },
    "Fraction pairs with sum 1": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Map']
    },
    "Kth Ancestor in a Tree": {
        "company": ['Google', 'Facebook', 'Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Shortest Source to Destination Path": {
        "company": ['Samsung'],
        "tag": ['DFS', 'Matrix', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Shortest path in Directed Acyclic Graph": {
        "company": [],
        "tag": ['Graph', 'Shortest Path', 'Data Structures', 'Algorithms']
    },
    "Reverse a Linked List in groups of given size": {
        "company": [
            'Paytm', 'VMWare',
            'Accolite', 'Amazon',
            'Microsoft', 'Snapdeal',
            'Hike', 'MakeMyTrip',
            'Walmart', 'Goldman Sachs',
            'Adobe', 'SAP Labs'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "First non-repeating character in a stream": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'FactSet',
            'Payu',
            'Adobe',
            'Yahoo'
        ],
        "tag": ['Hash', 'Queue', 'Data Structures']
    },
    "Longest Palindromic Subsequence": {
        "company": ['Amazon', 'Google'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Power Of Numbers": {
        "company": ['MakeMyTrip', 'Walmart'],
        "tag": ['Mathematical', 'Recursion', 'Divide and Conquer', 'Algorithms']
    },
    "Find kth element of spiral matrix": {
        "company": ['Amazon', 'Bloomberg', 'Facebook', 'Microsoft', 'Uber'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Smallest Positive missing number": {
        "company": ['Accolite', 'Amazon', 'Samsung', 'Snapdeal'],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Find triplets with zero sum": {
        "company": ['Amazon', 'Google', 'Facebook'],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Searching',
            'Hash',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Quick Sort": {
        "company": [
            'VMWare',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Hike',
            'Ola Cabs',
            'Goldman Sachs',
            'Adobe',
            'Qualcomm',
            'HSBC',
            'Grofers',
            'Target Corporation'
        ],
        "tag": ['Divide and Conquer', 'Sorting', 'Algorithms']
    },
    "Stock buy and sell II": {
        "company": [
            'Paytm', 'Flipkart',
            'Morgan Stanley', 'Accolite',
            'Amazon', 'Microsoft',
            'Samsung', 'D-E-Shaw',
            'Hike', 'MakeMyTrip',
            'Ola Cabs', 'Oracle',
            'Walmart', 'Goldman Sachs',
            'Directi', 'Intuit',
            'SAP Labs', 'Quikr',
            'Facebook', 'Salesforce',
            'Pubmatic', 'Sapient',
            'Swiggy'
        ],
        "tag": ['Arrays', 'Data Structures']
    },
    "Interleave the First Half of the Queue with Second Half": {
        "company": [],
        "tag": ['Stack', 'Queue', 'implementation', 'Data Structures']
    },
    "Count the subarrays having product less than k": {
        "company": ['Goldman Sachs',
            'Facebook',
            'Walmart',
            'Yatra.com',
            'Amazon',
            'Linkedin',
            'Microsoft',
            'Uber'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Lemonade Change": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Prefix match with other strings": {
        "company": ['Samsung'],
        "tag": ['Strings', 'Trie', 'Data Structures', 'Advanced Data Structure']
    },
    "nCr": {
        "company": [],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Task Scheduler": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Non-overlapping Intervals": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Find Kth permutation": {
        "company": [],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Max Coins": {
        "company": [],
        "tag": ['Dynamic Programming', 'Greedy', 'Sorting', 'Algorithms']
    },
    "Maximum path sum from any node": {
        "company": ['Flipkart', 'Google', 'Facebook'],
        "tag": ['Tree', 'Data Structures']
    },
    "Modify Linked List-1": {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Tree Transformation": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Construct a Full Binary Tree": {
        "company": [],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Cutting Binary String": {
        "company": ['Flipkart', 'Walmart', 'Google'],
        "tag": [
            'Dynamic Programming',
            'Bit Magic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Snake and Ladder Problem": {
        "company": [
            'Zoho',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'MAQ Software',
            'Adobe',
            'Nutanix',
            'Belzabar'
        ],
        "tag": [
            'Dynamic Programming',
            'DFS',
            'Graph',
            'BFS',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Job Sequencing Problem": {
        "company": ['Accolite', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Greedy', 'Algorithms']
    },
    "Easy Task": {
        "company": [],
        "tag": ['Segment-Tree', 'Advanced Data Structure']
    },
    "Nearest smaller tower": {
        "company": ['Atlassian'],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Count Total Setbits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Subtree In N-ary Tree": {
        "company": [],
        "tag": ['Tree']
    },
    "Another Coin Change Problem": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Geek's Village and Wells": {
        "company": [],
        "tag": ['Matrix', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Good Subtreess": {
        "company": [],
        "tag": ['DFS', 'Algorithms']
    },
    "Find Number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Knight in Geekland": {
        "company": [],
        "tag": ['Dynamic Programming', 'Matrix', 'BFS']
    },
    "Tree Transformation": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Maximum subset sum": {
        "company": ['Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Palindrome with minimum sum": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Prefix Suffix String": {
        "company": [],
        "tag": ['Strings', 'Trie', 'Data Structures']
    },
    "Smaller Sum": {
        "company": [],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Bheem Wants Ladoos": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Count Special Numbers": {
        "company": ['Intuit'],
        "tag": ['Arrays', 'Mathematical', 'sieve', 'Data Structures', 'Algorithms']
    },
    "Maximum Length": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Remove the balls": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Maximum Intersecting Lines": {
        "company": ['Swiggy'],
        "tag": ['Mathematical', 'Sorting', 'Geometric', 'Algorithms']
    },
    "Unequal Arrays": {
        "company": [],
        "tag": ['Arrays', 'Algorithms', 'logical-thinking']
    },
    "Even Swap": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Shy Geek": {
        "company": [],
        "tag": ['Binary Search', 'Data Structures', 'Algorithms']
    },
    "Minimum Steps Required": {
        "company": [],
        "tag": ['Greedy']
    },
    "Add Minimum Characters": {
        "company": ['Samsung'],
        "tag": ['Strings', 'Data Structures']
    },
    "Design Twitter": {
        "company": [],
        "tag": ['Hash', 'Stack', 'Heap', 'Design-Pattern', 'Data Structures']
    },
    "BST Maximum Difference": {
        "company": [],
        "tag": ['DFS', 'Binary Search Tree', 'Data Structures', 'Algorithms']
    },
    "Shortest XY distance in Grid": {
        "company": ['Google'],
        "tag": ['Dynamic Programming', 'BFS', 'Algorithms']
    },
    "String rp or pr": {
        "company": ['Google'],
        "tag": ['Strings', 'Greedy', 'Stack', 'Data Structures', 'Algorithms']
    },
    "Remove and Reverse": {
        "company": [],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Strings',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Clone Graph": {
        "company": ['Google'],
        "tag": ['Graph', 'Data Structures']
    },
    "Design Browser History": {
        "company": [],
        "tag": ['Stack', 'Design-Pattern', 'Data Structures']
    },
    "Project Manager": {
        "company": [],
        "tag": ['DFS', 'Sorting', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Special Palindrome Substrings": {
        "company": ['MakeMyTrip'],
        "tag": ['Strings', 'Data Structures']
    },
    "Hit most Balloons": {
        "company": ['PayPal'],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Maximum Possible Value": {
        "company": ['Sprinklr'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Second smallest number": {
        "company": ['VMWare'],
        "tag": ['Greedy', 'Mathematical', 'Algorithms']
    },
    "Maximum Meetings in One Room": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Find anagrams in linked list": {
        "company": [],
        "tag": ['Matrix', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Buy Maximum Stocks if i stocks can be bought on i-th day": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Exactly one swap": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum trains for which stoppage can be provided": {
        "company": ['Flipkart'],
        "tag": []
    },
    "Yet another query problem": {
        "company": [],
        "tag": ['prefix-sum', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Geek hates too many 1s": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Maximum Triplet product": {
        "company": ['VMWare'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Alex Travelling": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Number of Ways to Arrive at Destination": {
        "company": [],
        "tag": ['Graph', 'Shortest Path', 'Data Structures', 'Algorithms']
    },
    "Asteroid Collision": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Sum of subarray ranges": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Subarrays with K Different Integers": {
        "company": [],
        "tag": ['sliding-window', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Path With Minimum Effort": {
        "company": [],
        "tag": ['Graph']
    },
    "Count Good numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Combination Sum II": {
        "company": [],
        "tag": ['Arrays', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "Count Cyclic Paths": {
        "company": ['OYO Rooms'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum Sum Combination": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Distinct Coloring": {
        "company": ['Walmart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "GCD Array": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Minimum times A has to be repeated such that B is a substring of it": {
        "company": ['Google'],
        "tag": [
            'Searching',
            'Strings',
            'Pattern Searching',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum Days": {
        "company": [],
        "tag": ['Strings', 'permutation', 'Data Structures']
    },
    "Optimal Array": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Maximum Bipartite Matching": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Intersection Point in Y Shaped Linked Lists": {
        "company": [
            'VMWare', 'Flipkart',
            'Accolite', 'Amazon',
            'Microsoft', 'Snapdeal',
            'D-E-Shaw', 'FactSet',
            'MakeMyTrip', 'Visa',
            'Goldman Sachs', 'MAQ Software',
            'Adobe', 'Qualcomm'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Update Queries": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Valid Compressed String": {
        "company": ['Facebook'],
        "tag": ['Strings', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Fill the Matrix": {
        "company": ['Oracle'],
        "tag": ['Mathematical', 'BFS', 'Algorithms']
    },
    "Good Stones": {
        "company": [],
        "tag": ['Greedy', 'Dynamic Programming', 'Graph']
    },
    "Number of Good Components": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Connect Nodes at Same Level": {
        "company": [
            'Flipkart',
            'Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Ola Cabs',
            'Oracle',
            'Adobe',
            'Google',
            'Boomerang Commerce',
            'Xome'
        ],
        "tag": ['Tree', 'Data Structures']
    },
    "Unique Paths in a Grid": {
        "company": ['Uber'],
        "tag": ['Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Best Node": {
        "company": [],
        "tag": ['Tree', 'DFS']
    },
    "Detect Cycle using DSU": {
        "company": [],
        "tag": ['Graph', 'Disjoint Set', 'Data Structures']
    },
    "Prime List": {
        "company": [],
        "tag": [
            'Linked List',
            'Mathematical',
            'Prime Number',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Geeks Island": {
        "company": [],
        "tag": ['DFS', 'Matrix']
    },
    "BST Downward Traversal": {
        "company": [],
        "tag": ['Binary Search Tree']
    },
    "Water the plants": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Sorting', 'Algorithms']
    },
    "Length of the longest subarray with positive produc": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Triangle Path Sum": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Walls Coloring": {
        "company": [],
        "tag": ['Dynamic Programming']
    },
    "Find the longest string": {
        "company": ['Flipkart'],
        "tag": [
            'Strings',
            'BFS',
            'Trie',
            'Data Structures',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Find minimum number of Laptops required": {
        "company": ['Morgan Stanley'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Geeks And The String": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Shortest Prime Path": {
        "company": ['Adobe'],
        "tag": ['Prime Number', 'Shortest Path', 'BFS', 'Algorithms']
    },
    "Next Greater Element": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": ['Stack', 'Data Structures']
    },
    "Minimize number of Students to be removed": {
        "company": ['Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Flattening a Linked List": {
        "company": [
            'Paytm',
            'Flipkart',
            'Amazon',
            'Snapdeal',
            '24*7 Innovation Labs',
            'Payu',
            'Visa',
            'Goldman Sachs',
            'Qualcomm',
            'Drishti-Soft'
        ],
        "tag": ['Linked List', 'Data Structures']
    },
    "Minimum X (xor) A": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Maximum Value": {
        "company": ['Amazon'],
        "tag": ['DFS', 'Tree', 'implementation', 'Data Structures', 'Algorithms']
    },
    "Aggressive Cows": {
        "company": [],
        "tag": ['Binary Search', 'Algorithms']
    },
    "Floor in BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Hands of Straights": {
        "company": [],
        "tag": [
            'Arrays',
            'Hash',
            'Greedy',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Combination Sum  III": {
        "company": [],
        "tag": [
            'Arrays',
            'Recursion',
            'Backtracking',
            'Data Structures',
            'Algorithms']
    },
    "Sum of Beauty of All Substrings": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Prefix to Infix Conversion": {
        "company": [],
        "tag": ['Data Structures']
    },
    "Word Search": {
        "company": [],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Recursion',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Maximum point you can obtain from cards": {
        "company": [],
        "tag": ['sliding-window', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Minimum Absolute Difference In BST": {
        "company": [],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Fruit Into Baskets": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Binary subarray with sum": {
        "company": [],
        "tag": ['sliding-window', 'Arrays', 'Data Structures', 'Algorithms']
    },
    "Pattern": {
        "company": [],
        "tag": ['pattern-printing']
    },
    "Number Of Islands": {
        "company": [],
        "tag": ['union-find', 'Algorithms']
    },
    "Eventual Safe States": {
        "company": ['Bloomberg'],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Minimum Multiplications to reach End": {
        "company": [],
        "tag": ['Arrays', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Shortest Distance in a Binary Maze": {
        "company": [],
        "tag": ['Matrix', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Number Of Enclaves": {
        "company": ['Google'],
        "tag": ['DFS', 'Matrix', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Merging Details": {
        "company": [],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "City With the Smallest Number of Neighbors at a Threshold Distance": {
        "company": [],
        "tag": [
            'Graph',
            'Shortest Path',
            'BFS',
            'Disjoint Set',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Construct Binary Tree from String with bracket representation": {
        "company": [],
        "tag": ['Strings', 'Tree', 'Data Structures']
    },
    "Maximum product subset of an array": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find k-th smallest element in given n ranges": {
        "company": [],
        "tag": ['Searching', 'Sorting', 'Algorithms']
    },
    "Minimum Swaps": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Array Removals": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Replace every element with the least greater element on its right": {
        "company": [],
        "tag": ['set', 'Arrays', 'Binary Search Tree', 'Data Structures']
    },
    "Minimum Cost to cut a board into squares": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "K-th Largest Sum Contiguous Subarray": {
        "company": [],
        "tag": ['Arrays', 'priority-queue', 'Data Structures']
    },
    "Find shortest safe route in a matrix": {
        "company": [],
        "tag": ['DFS', 'Graph']
    },
    "Buy and Sell a Share at most twice": {
        "company": ['Amazon', 'Facebook'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Find Maximum Equal sum of Three Stacks": {
        "company": [],
        "tag": ['Greedy', 'Stack', 'Data Structures', 'Algorithms']
    },
    "Smallest sum contiguous subarray": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Wine Buying and Selling": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Stack Permutations": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Queue', 'implementation', 'Data Structures']
    },
    "Find Kth permutation": {
        "company": [],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Largest subtree sum in a tree": {
        "company": [],
        "tag": ['Tree']
    },
    "Split the binary string into substrings with equal number of 0s and 1s": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Sum of nodes within k distance from target": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Number of pairs": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Graph',
            'Disjoint Set',
            'Data Structures',
            'Algorithms'
        ]
    },
    "LCP": {
        "company": [],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms', 'Trie']
    },
    "Next element with greater frequency": {
        "company": [],
        "tag": ['Hash', 'Stack', 'Data Structures']
    },
    "Ceil in BST": {
        "company": ['Samsung'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Farthest number": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Maximum selections": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Level of Nodes": {
        "company": [],
        "tag": ['Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Escape the Forbidden Forest": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Robots": {
        "company": ['Ola Cabs'],
        "tag": ['implementation']
    },
    "Spidey Sense": {
        "company": [],
        "tag": ['Graph', 'Queue', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Maximum Winning score": {
        "company": ['Morgan Stanley'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Compute Before Matrix": {
        "company": ['Dunzo'],
        "tag": ['prefix-sum', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Coins of Geekland": {
        "company": ['Adobe'],
        "tag": ['Arrays', 'Matrix', 'Data Structures']
    },
    "Number of minimum picks to get 'k' pairs of socks from a drawer": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Transfiguration": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Help Classmates": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Maximum number of events that can be attended": {
        "company": ['Adobe'],
        "tag": ['Greedy', 'Sorting', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Bitwise AND of the Array": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Lucy's Neighbours": {
        "company": [],
        "tag": ['Heap', 'Data Structures']
    },
    "Valentine Sum": {
        "company": [],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Ruling Pair": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Count Triplets": {
        "company": [],
        "tag": ['Linked List', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Overlapping Intervals": {
        "company": ['Amazon', 'Microsoft', 'Google', 'Nutanix'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Spiral Matrix": {
        "company": [],
        "tag": ['Matrix', 'constructive algo', 'Data Structures']
    },
    "Bitwise AND of the Array": {
        "company": [],
        "tag": ['Arrays', 'Greedy', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Valid Pair Sum": {
        "company": [],
        "tag": [
            'Arrays',
            'Searching',
            'Greedy',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Minimum times A has to be repeated such that B is a substring of it": {
        "company": ['Google'],
        "tag": [
            'Searching',
            'Strings',
            'Pattern Searching',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Dam of Candies": {
        "company": [],
        "tag": ['two-pointer-algorithm', 'Algorithms']
    },
    "Repeated String Match": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Restricted Pacman": {
        "company": [],
        "tag": ['Hash', 'Mathematical', 'Queue', 'Data Structures', 'Algorithms']
    },
    "Course Schedule": {
        "company": ['Google'],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Nearly sorted": {
        "company": ['Flipkart', 'Amazon'],
        "tag": ['Arrays', 'Heap', 'Data Structures']
    },
    "All Unique Permutations of an array": {
        "company": ['Google'],
        "tag": ['Recursion', 'Backtracking', 'Algorithms']
    },
    "License Key Formatting": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Find and Replace in String": {
        "company": ['Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Find element occuring once when all other are present thrice": {
        "company": ['Google'],
        "tag": [
            'Arrays',
            'Mathematical',
            'Bit Magic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "IPL 2021 - Match Day 2": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Directi'],
        "tag": [
            'sliding-window',
            'Arrays',
            'Queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Neeman's Shoes": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Is Sudoku Valid": {
        "company": ['Amazon', 'Microsoft', 'Google'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Water the plants": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Sorting', 'Algorithms']
    },
    "Height Using Parent Array": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "IPL 2021 - Match Day 1": {
        "company": [],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Valid Expression": {
        "company": ['Yatra.com'],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "IPL 2021 - Match Day 3": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "IPL 2021 - Match Day 4": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Maximum XOR subarray": {
        "company": ['Microsoft'],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Large Factorial": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Binary Matrix with at most K 1s": {
        "company": ['Directi'],
        "tag": [
            'Searching',
            'Dynamic Programming',
            'Divide and Conquer',
            'Matrix',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Anti Diagonal Traversal of Matrix": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Misc', 'Matrix', 'Data Structures']
    },
    "Missing Point of a Parallelogram": {
        "company": [],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Rank The Permutations": {
        "company": ['Amazon', 'Microsoft', 'FactSet'],
        "tag": ['number-theory', 'Strings', 'Data Structures']
    },
    "Insertion Sort for Singly Linked List": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Cousins of a given node": {
        "company": ['Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Permutations of a given string": {
        "company": [
            'Zoho', 'Accolite',
            'Amazon', 'Microsoft',
            'OYO Rooms', 'Samsung',
            'Snapdeal', 'Citrix',
            'Walmart', 'MAQ Software',
            'Cisco'
        ],
        "tag": [
            'Strings',
            'Recursion',
            'Backtracking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Rank The Permutations": {
        "company": ['Amazon', 'Microsoft', 'FactSet'],
        "tag": ['number-theory', 'Strings', 'Data Structures']
    },
    "Insertion Sort for Singly Linked List": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Cousins of a given node": {
        "company": ['Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Paths from root with a specified sum": {
        "company": ['Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Remove all occurences of duplicates in a linked list": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Division without using multiplication, division and mod operator": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Word Boggle - II": {
        "company": [
            'Amazon',
            'Microsoft',
            'MakeMyTrip',
            'Directi',
            'Google',
            'Facebook',
            'Yahoo',
            'Nvidia'
        ],
        "tag": [
            'Recursion',
            'DFS',
            'Graph',
            'Trie',
            'Data Structures',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Flatten binary tree to linked list": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Tree', 'Data Structures']
    },
    "Subsets": {
        "company": ['Microsoft'],
        "tag": ['Recursion', 'Backtracking', 'Algorithms']
    },
    "Remove all occurences of duplicates in a linked list": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Shortest Prime Path": {
        "company": ['Adobe'],
        "tag": ['Prime Number', 'Shortest Path', 'BFS', 'Algorithms']
    },
    "Binary Searchable elements": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Algorithms']
    },
    "Maximum sum of elements not part of LIS": {
        "company": ['Flipkart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimize the Heights I": {
        "company": ['Adobe'],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Greedy',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Shortest Prime Path": {
        "company": ['Adobe'],
        "tag": ['Prime Number', 'Shortest Path', 'BFS', 'Algorithms']
    },
    "Number of Provinces": {
        "company": ['Amazon', 'Microsoft', 'Google'],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Clone a stack without using extra space": {
        "company": ['Flipkart'],
        "tag": ['Stack', 'Data Structures']
    },
    "Distance from the Source (Bellman-Ford Algorithm)": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Player with max score": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "BST to max heap": {
        "company": ['DE Shaw'],
        "tag": ['Binary Search Tree', 'Heap', 'Data Structures']
    },
    "Single valued subtree": {
        "company": ['Media.net'],
        "tag": ['Tree', 'Data Structures']
    },
    "Number following a pattern": {
        "company": ['Amazon', 'Goldman Sachs', 'Google'],
        "tag": ['Strings', 'Data Structures']
    },
    "Substrings of length k with k-1 distinct elements": {
        "company": ['Amazon'],
        "tag": ['sliding-window', 'Strings', 'Data Structures', 'Algorithms']
    },
    "BST to greater sum tree": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Maximum sum leaf to root path": {
        "company": ['Morgan Stanley'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Longest Palindrome in a String": {
        "company": [
            'Zoho', 'Accolite',
            'Amazon', 'Microsoft',
            'Samsung', 'MakeMyTrip',
            'Visa', 'Walmart',
            'Google', 'Qualcomm'
        ],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Maximum sum Rectangle": {
        "company": [
            'Flipkart',
            'Accolite',
            'Amazon',
            'Samsung',
            'D-E-Shaw',
            'FactSet',
            'Walmart'
        ],
        "tag": ['prefix-sum', 'Matrix', 'Kadane', 'Data Structures', 'Algorithms']
    },
    "Capacity To Ship Packages Within D Days": {
        "company": ['Amazon', 'D-E-Shaw'],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Word Search": {
        "company": ['Amazon', 'Microsoft', 'Intuit', 'Apple'],
        "tag": [
            'Recursion',
            'DFS',
            'Graph',
            'Backtracking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "LCS of three strings": {
        "company": ['DE Shaw'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximum Intervals Overlap": {
        "company": ['Flipkart', 'Accolite', 'Amazon', 'Visa', 'Directi'],
        "tag": ['Sorting', 'Algorithms']
    },
    "Replace O's with X's": {
        "company": ['Google'],
        "tag": ['Recursion', 'Matrix', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Count pairs in array divisible by K": {
        "company": ['PayPal'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Find rectangle with corners as 1": {
        "company": ['Flipkart'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Maximum XOR of two numbers in an array": {
        "company": ['Flipkart'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Construct list using given q XOR queries": {
        "company": ['Amazon', 'Google'],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Form a palindrome": {
        "company": ['Amazon', 'Microsoft', 'Google', 'Airtel'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Distribute N candies among K people": {
        "company": ['Microsoft'],
        "tag": [
            'Arrays',
            'Mathematical',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Remove K Digits": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Data Structures']
    },
    "Sort a 2D vector diagonally": {
        "company": ['Microsoft'],
        "tag": ['Sorting', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "Triplets with sum with given range": {
        "company": [],
        "tag": ['Microsoft']
    },
    "Subarrays with sum K": {
        "company": ['Microsoft'],
        "tag": ['Hash', 'Data Structures']
    },
    "Partition a Linked List around a given value": {
        "company": ['Microsoft'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Preorder Traversal and BST": {
        "company": ['Morgan Stanley', 'Microsoft', 'Adobe'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Subset Sum Problem": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Huffman Encoding": {
        "company": ['Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Samsung',
            'United Health Group'],
        "tag": ['Heap', 'priority-queue', 'Data Structures', 'Algorithms']
    },
    "Gray Code": {
        "company": ['Microsoft'],
        "tag": ['Recursion', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "Maximum value of difference of a pair of elements and their Index": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Minimum XOR value pair": {
        "company": ['Microsoft'],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Coin Piles": {
        "company": ['Microsoft'],
        "tag": [
            'Arrays',
            'Greedy',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Search Pattern (Z-algorithm)": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Pattern Searching', 'Data Structures', 'Algorithms']
    },
    "Next higher palindromic number using the same set of digits": {
        "company": ['Microsoft', 'Adobe'],
        "tag": ['Strings', 'Numbers', 'palindrome', 'Data Structures']
    },
    "Search Pattern (Rabin-Karp Algorithm)": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Pattern Searching', 'Data Structures', 'Algorithms']
    },
    "Rearrange characters": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Strings', 'Heap', 'STL', 'Data Structures']
    },
    "Prerequisite Tasks": {
        "company": ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Twitter', 'Apple'],
        "tag": ['Graph', 'Data Structures']
    },
    "Postorder Traversal (Iterative)": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Tree', 'Data Structures']
    },
    "Longest Palindromic Substring": {
        "company": [
            'Amazon', 'Microsoft',
            'Samsung', 'MakeMyTrip',
            'Visa', 'Walmart',
            'Qualcomm'
        ],
        "tag": ['Strings', 'Data Structures']
    },
    "Covid Spread": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Generate Parentheses": {
        "company": ['Amazon', 'Microsoft', 'Walmart', 'Adobe', 'Google'],
        "tag": ['Recursion', 'Backtracking', 'Algorithms']
    },
    "Floyd Warshall": {
        "company": ['Samsung'],
        "tag": ['Dynamic Programming', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Find missing in second array": {
        "company": ['Zoho', 'Accolite', 'Microsoft', 'Snapdeal'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Preorder traversal (Iterative)": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Tree', 'Data Structures']
    },
    "Inorder Traversal (Iterative)": {
        "company": ['Microsoft'],
        "tag": ['Stack', 'Tree', 'Data Structures']
    },
    "Print kth character": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum Product of Increasing Subsequence of Size 3": {
        "company": [],
        "tag": ['set', 'Arrays', 'Data Structures']
    },
    "Sisters and coins": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "7 Segment Display": {
        "company": [],
        "tag": ['Greedy', 'Mathematical', 'Algorithms']
    },
    "Next Permutation": {
        "company": [
            'Infosys', 'Flipkart',
            'Amazon', 'Microsoft',
            'FactSet', 'Hike',
            'MakeMyTrip', 'Google',
            'Qualcomm', 'Salesforce'
        ],
        "tag": ['Arrays', 'permutation', 'constructive algo', 'Data Structures']
    },
    "Geek in a Maze": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Police and Thieves": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Algorithms']
    },
    "Geek and Number String": {
        "company": [],
        "tag": ['Stack', 'Data Structures']
    },
    "Shortest Path between Cities": {
        "company": [],
        "tag": ['Mathematical', 'Tree', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Count of substrings containing K ones": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Next Greater Element": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'MakeMyTrip', 'Adobe'],
        "tag": ['Stack', 'Data Structures']
    },
    "Minimum number of jumps": {
        "company": [
            'Moonfrog Labs',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'Housing.com',
            'Walmart',
            'Adobe',
            'Google'
        ],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Maximum Index": {
        "company": ['VMWare', 'Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Kth smallest element": {
        "company": ['VMWare', 'Accolite',
            'Amazon', 'Microsoft',
            'Snapdeal', 'Hike',
            'Adobe', 'Google',
            'ABCO', 'Cisco'],
        "tag": ['Arrays', 'Searching', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Number of pairs": {
        "company": [],
        "tag": ['Sorting', 'Algorithms']
    },
    "Find All Four Sum Numbers": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms', 'Adobe', 'Google'],
        "tag": ['Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Unique Subsets": {
        "company": ['Amazon', 'Microsoft', 'PayPal'],
        "tag": ['Sorting', 'subset', 'Backtracking', 'Algorithms']
    },
    "Boolean Matrix": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Matrix', 'Data Structures']
    },
    "Minimum Platforms": {
        "company": ['Paytm',
            'Amazon',
            'Microsoft',
            'D-E-Shaw',
            'Hike',
            'Walmart',
            'Adobe',
            'Google',
            'Boomerang Commerce',
            'Zillious',
            'Atlassian'],
        "tag": [
            'Arrays',
            'Greedy',
            'Sorting',
            'Binary Search',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Black and White": {
        "company": [],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Stock buy and sell": {
        "company": ['Paytm', 'Flipkart',
            'Accolite', 'Amazon',
            'Microsoft', 'D-E-Shaw',
            'MakeMyTrip', 'Ola Cabs',
            'Oracle', 'Walmart',
            'Goldman Sachs', 'Directi',
            'Intuit', 'Google',
            'Quikr', 'Salesforce',
            'Pubmatic', 'Sapient',
            'Swiggy', 'Media.net'],
        "tag": [
            'Arrays',
            'Dynamic Programming',
            'Greedy',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Excel Sheet | Part - 1": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Data Structures']
    },
    "Maximum of all subarrays of size k": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Directi', 'Google'],
        "tag": [
            'sliding-window',
            'Arrays',
            'Queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Stock span problem": {
        "company": ['Flipkart', 'Accolite', 'Amazon', 'Microsoft', 'Samsung', 'Adobe'],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Combination Sum": {
        "company": ['Amazon', 'Microsoft', 'Adobe'],
        "tag": ['Recursion', 'Backtracking', 'Algorithms']
    },
    "Job Sequencing Problem": {
        "company": ['Flipkart', 'Accolite', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Greedy', 'Algorithms']
    },
    "Spirally traversing a matrix": {
        "company": [
            'Paytm', 'Flipkart',
            'Morgan Stanley', 'Microsoft',
            'OYO Rooms', 'Snapdeal',
            'D-E-Shaw', 'MakeMyTrip',
            'Oracle', 'MAQ Software',
            'Nagarro', 'BrowserStack',
            'Salesforce'
        ],
        "tag": ['Arrays', 'Matrix', 'Data Structures']
    },
    "Possible paths between 2 vertices": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Container With Most Water": {
        "company": ['Flipkart', 'Amazon', 'Google'],
        "tag": [
            'Arrays',
            'Mathematical',
            'Puzzles',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Kadane's Algorithm": {
        "company": ['Zoho', 'Flipkart',
            'Morgan Stanley', 'Accolite',
            'Amazon', 'Microsoft',
            'Samsung', 'Snapdeal',
            '24*7 Innovation Labs', 'Citrix',
            'D-E-Shaw', 'FactSet',
            'Hike', 'Housing.com',
            'Ola Cabs', 'Oracle',
            'Payu', 'Teradata',
            'Visa', 'Walmart',
            'Adobe', 'Google',
            'Arcesium'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Word Break": {
        "company": ['Zoho',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'Hike',
            'Walmart',
            'MAQ Software',
            'Google',
            'IBM'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Trapping Rain Water": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Google'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Optimal Strategy For A Game": {
        "company": [],
        "tag": ['Dynamic Programming']
    },
    "Maximize The Cut Segments": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Count total set bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Print Anagrams Together": {
        "company": ['Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Snapdeal',
            'D-E-Shaw',
            'Goldman Sachs'],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Rearrange Array Alternately": {
        "company": ['Zoho'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Rearrange an array with O(1) extra space": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Maximum AND Value": {
        "company": ['Microsoft'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Count Inversions": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'MakeMyTrip',
            'Adobe',
            'BankBazaar',
            'Myntra'],
        "tag": [
            'Arrays',
            'Divide and Conquer',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "0 - 1 Knapsack Problem": {
        "company": ['Flipkart',
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Snapdeal',
            'Oracle',
            'Payu',
            'Visa',
            'Directi',
            'GreyOrange',
            'Mobicip'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Count the number of possible triangles": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Arrays', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Fractional Knapsack": {
        "company": ['Microsoft'],
        "tag": ['Greedy', 'Algorithms']
    },
    "Jump Game": {
        "company": ['Amazon', 'Microsoft', 'Google', 'Facebook'],
        "tag": [
            'Arrays',
            'Dynamic Programming',
            'Greedy',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Searching an element in a sorted array (Ternary Search)": {
        "company": ['Paytm', 'Microsoft'],
        "tag": ['Searching', 'Divide and Conquer', 'Design-Pattern', 'Algorithms']
    },
    "Restrictive Candy Crush": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Longest K unique characters substring": {
        "company": ['Amazon', 'Google', 'SAP Labs'],
        "tag": [
            'two-pointer-algorithm',
            'Hash',
            'Strings',
            'Map',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Search in a row-column sorted Matrix": {
        "company": [
            'Paytm', 'Accolite',
            'MakeMyTrip', 'Ola Cabs',
            'Oracle', 'Visa',
            'Goldman Sachs', 'Directi',
            'InMobi', 'One97',
            'Polycom', 'TinyOwl'],
        "tag": ['Searching', 'Matrix', 'Data Structures', 'Algorithms']
    },

    "Make Matrix Beautiful": {
        "company": [],
        "tag": ['Matrix', 'Data Structures']
    },
    "Stickler Thief": {
        "company": ['Paytm', 'Flipkart', 'Amazon', 'OYO Rooms', 'Walmart', 'Google'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Triplet Sum in Array": {
        "company": ['Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Samsung',
            'CarWale'],
        "tag": [
            'two-pointer-algorithm',
            'Arrays',
            'Hash',
            'Sorting',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Tower Of Hanoi": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Recursion', 'Algorithms']
    },
    "Majority Element": {
        "company": ['Flipkart', 'Accolite',
            'Amazon', 'Microsoft',
            'D-E-Shaw', 'Google',
            'Nagarro', 'Atlassian'],
        "tag": ['Arrays', 'Searching', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Find Missing And Repeating": {
        "company": ['Amazon', 'Samsung', 'D-E-Shaw', 'Goldman Sachs', 'MAQ Software'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count ways to reach the n'th stair": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'OYO Rooms', 'Adobe'],
        "tag": [
            'sliding-window',
            'Dynamic Programming',
            'Mathematical',
            'Algorithms'
        ]
    },
    "Validate an IP Address": {
        "company": ['Zoho', 'Amazon', 'Microsoft', 'Qualcomm'],
        "tag": ['Strings', 'Data Structures']
    },
    "Count subsequences of type a^i, b^j, c^k": {
        "company": ['Amazon'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Implement Atoi": {
        "company": ['Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Payu',
            'Adobe',
            'Code Brew'],
        "tag": ['Strings', 'Design-Pattern', 'Data Structures']
    },
    "Most frequent word in an array of strings": {
        "company": ['Microsoft', 'Citrix', 'Adobe'],
        "tag": ['Trie', 'Advanced Data Structure']
    },
    "Trie | (Insert and Search)": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'D-E-Shaw', 'FactSet'],
        "tag": ['Trie', 'Design-Pattern', 'Advanced Data Structure']
    },
    "Shortest Common Supersequence": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "X Total Shapes": {
        "company": ['Amazon', 'Google'],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Preorder to PostOrder": {
        "company": ['Flipkart', 'Amazon', 'Linkedin'],
        "tag": ['Stack', 'Binary Search Tree', 'Tree', 'Data Structures']
    },
    "Sort an array according to the other": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Searching', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Partition Equal Subset Sum": {
        "company": ['Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Adobe',
            'Drishti-Soft'],
        "tag": ['Dynamic Programming', 'subset', 'Algorithms']
    },
    "Zero Sum Subarrays": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Rotten Oranges": {
        "company": ['Flipkart',
            'Accolite',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Samsung',
            'MakeMyTrip'],
        "tag": ['Matrix', 'Graph', 'Queue', 'Data Structures']
    },
    "Find whether path exist": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft', 'Samsung', 'Adobe'],
        "tag": ['DFS', 'Matrix', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Word Boggle": {
        "company": ['Amazon',
            'Microsoft',
            'MakeMyTrip',
            'Directi',
            'Google',
            'Facebook',
            'Yahoo',
            'Nvidia'],
        "tag": [
            'Recursion',
            'DFS',
            'Graph',
            'Backtracking',
            'Trie',
            'Data Structures',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Steps by Knight": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'MakeMyTrip',
            'Goldman Sachs',
            'Intuit',
            'Linkedin'],
        "tag": ['Graph', 'Queue', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Rotate by 90 degree": {
        "company": ['Paytm',
            'Zoho',
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Snapdeal',
            'D-E-Shaw'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Count ways to N'th Stair(Order does not matter)": {
        "company": ['Accolite', 'Amazon'],
        "tag": ['Dynamic Programming', 'Mathematical', 'Algorithms']
    },
    "Case-specific Sorting of Strings": {
        "company": [],
        "tag": ['Strings', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "M-Coloring Problem": {
        "company": ['Amazon'],
        "tag": ['Backtracking', 'Algorithms']
    },
    "Unit Area of largest region of 1's": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Ola Cabs',
            'Google',
            'Salesforce'],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Subarrays with equal 1s and 0s": {
        "company": [],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Longest consecutive subsequence": {
        "company": ['Amazon', 'Microsoft', 'Walmart'],
        "tag": ['Hash', 'Data Structures']
    },
    "Distance of nearest cell having 1": {
        "company": [],
        "tag": ['Matrix', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Sorting Elements of an Array by Frequency": {
        "company": ['Oracle', 'Zycus'],
        "tag": ['Arrays', 'Hash', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Maximum sum of Non-adjacent nodes": {
        "company": ['Flipkart', 'Amazon', 'Google'],
        "tag": ['Tree', 'Data Structures']
    },
    "Possible Words From Phone Digits": {
        "company": ['Flipkart', 'Amazon', 'Microsoft'],
        "tag": [
            'Arrays',
            'Strings',
            'Mathematical',
            'Recursion',
            'Backtracking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Unique BST's": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'Twitter'],
        "tag": [
            'Dynamic Programming',
            'Binary Search Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "nCr mod M | Part 2": {
        "company": [],
        "tag": ['Combinatorial', 'Modular Arithmetic', 'Algorithms']
    },
    "A difference of values and indexes": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Maximum Product of Increasing Subsequence of Size 3": {
        "company": [],
        "tag": ['set', 'Binary Search Tree', 'Data Structures']
    },
    "LRU Cache": {
        "company": ['Paytm', 'Zoho',
            'Flipkart', 'Morgan Stanley',
            'Amazon', 'Microsoft',
            'OYO Rooms', 'Samsung',
            'Snapdeal', 'Hike',
            'MakeMyTrip', 'Ola Cabs',
            'Visa', 'Walmart',
            'Goldman Sachs', 'Adobe',
            'Google', 'Yahoo'],
        "tag": [
            'doubly-linked-list',
            'Hash',
            'Queue',
            'Design-Pattern',
            'Data Structures'
        ]
    },
    "Strongly Connected Components (Kosaraju's Algo)": {
        "company": ['Amazon', 'Microsoft', 'Visa'],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Smaller on Left": {
        "company": [],
        "tag": ['set', 'Arrays', 'Hash', 'Map', 'Data Structures']
    },
    "Count of distinct substrings": {
        "company": [],
        "tag": ['Arrays', 'Trie', 'Data Structures', 'Advanced Data Structure']
    },
    "Trie | (Delete)": {
        "company": [],
        "tag": ['Trie', 'Design-Pattern', 'Advanced Data Structure']
    },
    "Geek and Strings": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Tree',
            'Trie',
            'Data Structures',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "ThrowBall at Fair": {
        "company": [],
        "tag": ['Combinatorial']
    },
    "Count Number": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Divisibility": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Total number of Equal Partition": {
        "company": [],
        "tag": ['sieve']
    },
    "Serialize and Deserialize a Binary Tree": {
        "company": [
            'Paytm', 'Flipkart',
            'Accolite', 'Amazon',
            'Microsoft', 'MAQ Software',
            'Adobe', 'Linkedin',
            'Quikr', 'Yahoo',
            'InMobi'],
        "tag": ['Tree', 'Data Structures']
    },
    "Count Palindromic Subsequences": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Construct expression tree": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Box Stacking": {
        "company": ['Amazon', 'Microsoft', 'Codenation'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Pots of Gold Game": {
        "company": ['Adobe', 'Google'],
        "tag": ['Dynamic Programming', 'Game Theory', 'Algorithms']
    },
    "Negative weight cycle": {
        "company": ['Cisco'],
        "tag": ['Graph', 'Data Structures']
    },
    "Brain Game": {
        "company": [],
        "tag": ['Mathematical', 'Combinatorial', 'Algorithms']
    },
    "Money Distributions": {
        "company": [],
        "tag": ['number-theory', 'Combinatorial']
    },
    "Count in array": {
        "company": [],
        "tag": ['Dynamic Programming', 'Modular Arithmetic', 'Algorithms']
    },
    "Rahul and The Lift": {
        "company": [],
        "tag": ['Combinatorial', 'modular arithmetic']
    },
    "Longest Prefix Suffix": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": ['Strings', 'Data Structures']
    },
    "Largest number in K swaps": {
        "company": ['Amazon', 'Microsoft', 'MakeMyTrip', 'Walmart', 'Intuit', 'Google'],
        "tag": ['Strings', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Add two numbers represented by Linked List": {
        "company": [],
        "tag": ['Linked List', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "Count the Number of Full Binary Trees": {
        "company": [],
        "tag": ['Arrays', 'Tree', 'Data Structures']
    },
    "Distributing Balls": {
        "company": [],
        "tag": ['Dynamic Programming', 'permutation', 'Combinatorial', 'Algorithms']
    },
    "Reverse Delete Algorithm for Minimum Spanning Tree": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Nodes at even distance": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Taking 1 out of 3 consecutives": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximum calorie": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Geek and knots": {
        "company": [],
        "tag": ['Dynamic Programming', 'Combinatorial', 'Algorithms']
    },
    "Count of AP Subsequences": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "onstruct binary palindrome by repeated appending and trimming": {
        "company": [],
        "tag": [
            'Arrays',
            'DFS',
            'Graph',
            'palindrome',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Queries on Strings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Jumbled Strings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Subsets with XOR value": {
        "company": [],
        "tag": ['Dynamic Programming', 'Bit Magic', 'Data Structures', 'Algorithms']
    },
    "String Conversion": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximum Sum Subsequence of length k": {
        "company": ['Walmart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Longest Arithmetic Progression": {
        "company": ['Amazon', 'Microsoft', 'Snapdeal', 'Google'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Transform String": {
        "company": ['Directi'],
        "tag": ['Hash', 'Strings', 'Map', 'Data Structures']
    },
    "Count ways to increase LCS length of two strings by one": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Count digit groupings of a number": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Lexicographically smallest string": {
        "company": [],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Beautiful SubSequence": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Minimum cost to fill given weight in a bag": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Fill the Tank": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Party in Town": {
        "company": [],
        "tag": ['DFS', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Perfect Sum Problem": {
        "company": ['Amazon', 'Microsoft', 'Tesco'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Techfest and the Queue": {
        "company": [],
        "tag": ['Prime Number', 'sieve']
    },
    "Sum-string": {
        "company": ['Nutanix'],
        "tag": [
            'Strings',
            'Recursion',
            'Backtracking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Divisibility tree": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Your Social Network": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Tricky Subset Problem": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Longest Common Substring": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Product of Primes": {
        "company": [],
        "tag": ['Prime Number', 'sieve']
    },
    "Number of palindromic strings": {
        "company": [],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Mathematical',
            'Combinatorial',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Matrix Exponentiation": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Matrix',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Count of Palindromic substrings in an Index range": {
        "company": ['SAP Labs'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'palindrome',
            'Data Structures',
            'Algorithms']
    },
    "Count Palindrome Sub-Strings of a String": {
        "company": ['Morgan Stanley', 'Amazon', 'Ola Cabs', 'SAP Labs'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Palindromic  Strings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Sum of Query I": {
        "company": [],
        "tag": [
            'Dynamic Programming',
            'Mathematical',
            'Combinatorial',
            'Algorithms'
        ]
    },
    "Modify array to maximize sum of adjacent differences": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Form a palindrome": {
        "company": ['Amazon', 'Google', 'Airtel'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Maximum Sum Path in Two Arrays": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Sum of Query II": {
        "company": ['Amazon'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Smallest Subarray GCD": {
        "company": [],
        "tag": [
            'Arrays',
            'Tree',
            'Segment-Tree',
            'Data Structures',
            'Advanced Data Structure'
        ]
    },
    "Magical Box": {
        "company": [],
        "tag": ['Mathematical', 'Geometric', 'Algorithms']
    },
    "Minimum steps to delete a string": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Magic Triplets": {
        "company": ['D-E-Shaw'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Non-decreasing subsequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Subset with sum divisible by m": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum Bipartite Matching": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Shortest Uncommon Subsequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Number of subsequences in a string divisible by n": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum Sub-String after at most K changes": {
        "company": ['Amazon'],
        "tag": ['Misc']
    },
    "Find all distinct subset (or subsequence) sums": {
        "company": ['Flipkart'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find length of longest subsequence": {
        "company": [],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Painting the Fence": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Longest alternating subsequence": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Temple Offerings": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Mr. Modulo and Arrays": {
        "company": [],
        "tag": ['Arrays', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Longest Common Increasing Subsequence": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Save Winterfell": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Lots of Work": {
        "company": [],
        "tag": ['Misc']
    },
    "The Smurfs": {
        "company": [],
        "tag": ['Puzzles']
    },
    "Pass the semester": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Villain Con": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Water Connection Problem": {
        "company": [],
        "tag": ['Greedy', 'DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Easy Query": {
        "company": [],
        "tag": [
            'Binary Search Tree',
            'Segment-Tree',
            'Data Structures',
            'Advanced Data Structure'
        ]
    },
    "Maximize the sum of selected numbers from a sorted array to make it empty": {
        "company": [],
        "tag": [
            'prefix-sum',
            'Segment-Tree',
            'Algorithms',
            'Advanced Data Structure'
        ]
    },
    "Element left after performing alternate OR & XOR operation": {
        "company": [],
        "tag": [
            'Bit Magic',
            'Segment-Tree',
            'Data Structures',
            'Advanced Data Structure'
        ]
    },
    "count special palindromic": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Rat Maze With Multiple Jumps": {
        "company": [],
        "tag": ['Matrix', 'Backtracking', 'Data Structures', 'Algorithms']
    },
    "Count Divisors of Factorial": {
        "company": [],
        "tag": ['Mathematical', 'Prime Number', 'sieve', 'Algorithms']
    },
    "Possible Path": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Buying Vegetables": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Save Gotham!": {
        "company": [],
        "tag": ['Arrays', 'Stack', 'Data Structures']
    },
    "Aditya and his building blocks": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Minimum swaps and K together": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Shreyansh and his bits": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Santa Banta": {
        "company": [],
        "tag": ['Arrays', 'sieve', 'Graph', 'Data Structures']
    },
    "Grouping Of Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Misc', 'Algorithms']
    },
    "Print Binary Tree levels in sorted order": {
        "company": [],
        "tag": [
            'Sorting',
            'Queue',
            'Tree',
            'priority-queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "C++ Friend function": {
        "company": [],
        "tag": ['Misc', 'CPP', 'Functions']
    },
    "2D Hopscotch": {
        "company": [],
        "tag": ['Matrix', 'CPP', 'Data Structures']
    },
    "Big Numbers Series": {
        "company": [],
        "tag": ['permutation']
    },
    "Pasha and Primes": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Sum of XOR of all pairs": {
        "company": [],
        "tag": ['Arrays', 'Bit Magic', 'Data Structures']
    },
    "Challenge by Nikitasha": {
        "company": [],
        "tag": ['number-theory', 'Strings', 'modular arithmetic', 'Data Structures']
    },
    "Sick Pasha": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Longest subarray with sum divisible by K": {
        "company": ['Microsoft', 'Snapdeal'],
        "tag": [
            'prefix-sum',
            'sliding-window',
            'Arrays',
            'Hash',
            'Data Structures',
            'Algorithms'
        ]
    },
    "LCM Triplet": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Satisfy the equation": {
        "company": [],
        "tag": ['Hash', 'Data Structures']
    },
    "Longest Sub-Array with Sum K": {
        "company": ['Amazon'],
        "tag": [
            'sliding-window',
            'Arrays',
            'Hash',
            'Map',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Series with largest GCD and sum equals to N": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Count divisors of product of array elements": {
        "company": [],
        "tag": ['Arrays', 'Prime Number', 'Data Structures']
    },
    "Recurrence Matrix": {
        "company": [],
        "tag": ['number-theory', 'Dynamic Programming', 'Algorithms']
    },
    "Leftmost Divisor": {
        "company": [],
        "tag": ['Modular Arithmetic', 'Operators', 'Algorithms']
    },
    "Queries for counts of multiples in an array": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'sieve', 'Data Structures', 'Algorithms']
    },
    "Build the smallest": {
        "company": [],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Maximum bitonic subarray sum": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the element at given index": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Next higher number in one swap": {
        "company": [],
        "tag": ['Strings', 'Numbers', 'Data Structures']
    },
    "Previous number in one swap": {
        "company": [],
        "tag": ['Strings', 'Numbers', 'Data Structures']
    },
    "Pairs of Non Coinciding Points": {
        "company": [],
        "tag": ['Hash', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "C++ Generic sort": {
        "company": [],
        "tag": ['Sorting', 'Misc', 'CPP', 'Algorithms']
    },
    "Maximum GCD Pair": {
        "company": [],
        "tag": ['Mathematical', 'sieve', 'Algorithms']
    },
    "Subarray Inversions": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "A Game of LCM": {
        "company": [],
        "tag": ['Misc']
    },
    "Large Product-2": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Smallest Non-Zero Number": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count of sum of consecutives": {
        "company": ['Visa', 'Walmart', 'Linkedin'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Longest common substring value of two numbers": {
        "company": ['Citrix'],
        "tag": [
            'Strings',
            'Dynamic Programming',
            'Numbers',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Mail System Design": {
        "company": [],
        "tag": ['Linked List', 'Hash', 'Data Structures']
    },
    "Count even length": {
        "company": [],
        "tag": ['Algorithms']
    },
    "Construct Tree from Inorder & Preorder": {
        "company": ['Accolite', 'Amazon', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Median in a row-wise sorted Matrix": {
        "company": [],
        "tag": ['Matrix', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Sisters and coins": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "CamelCase Pattern Matching": {
        "company": ['Ola Cabs'],
        "tag": ['Strings', 'Trie', 'Data Structures', 'Advanced Data Structure']
    },
    "Array Pair Sum Divisibility Problem": {
        "company": ['Amazon', 'Microsoft', 'Goldman Sachs', 'Directi'],
        "tag": ['Hash', 'STL', 'Data Structures']
    },
    "Factorial and numbers": {
        "company": [],
        "tag": ['factorial']
    },
    "Cows of FooLand": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Count possible ways to construct buildings": {
        "company": ['Payu'],
        "tag": ['Dynamic Programming', 'Fibonacci', 'Algorithms']
    },
    "Page Faults in LRU": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Longest Bitonic subsequence": {
        "company": ['Microsoft', 'Cisco'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Pyramid form": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum Time": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Mobile numeric keypad": {
        "company": ['Flipkart', 'Microsoft', 'MAQ Software', 'Sprinklr'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Infix to Postfix": {
        "company": ['Paytm', 'VMWare', 'Microsoft'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Binary Heap Operations": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'Ola Cabs', 'Walmart', 'Synopsys'],
        "tag": ['Heap', 'Design-Pattern', 'Data Structures']
    },
    "Largest Sum Subarray of Size at least K": {
        "company": ['Facebook'],
        "tag": [
            'sliding-window',
            'Arrays',
            'Dynamic Programming',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Geek collects the balls": {
        "company": [],
        "tag": ['Greedy', 'Algorithms']
    },
    "Kth largest element in a stream": {
        "company": [
            'Flipkart',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Hike',
            'Walmart',
            'Cisco'
        ],
        "tag": ['Heap', 'Data Structures']
    },
    "Merge K sorted linked lists": {
        "company": ['VMWare', 'Amazon', 'Microsoft'],
        "tag": ['Linked List', 'Heap', 'Data Structures']
    },
    "Nearly Sorted Algorithm": {
        "company": [],
        "tag": ['Arrays', 'Heap', 'Data Structures']
    },
    "Rubik's Cube": {
        "company": ['Ola Cabs'],
        "tag": ['Arrays', 'Data Structures']
    },
    "Count Divisors": {
        "company": [],
        "tag": ['Prime Number', 'sieve']
    },
    "Minimum steps to destination": {
        "company": ['Flipkart', 'Amazon', 'InMobi'],
        "tag": ['Dynamic Programming', 'Recursion', 'Algorithms']
    },
    "Find the largest number": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Kth Smallest Factor": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Magnet Array Problem": {
        "company": ['D-E-Shaw'],
        "tag": [
            'Arrays',
            'Searching',
            'Mathematical',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Print leaf nodes from preorder traversal of BST": {
        "company": ['Facebook'],
        "tag": [
            'Recursion',
            'Stack',
            'Binary Search Tree',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Express as sum of power of natural numbers": {
        "company": ['Adobe'],
        "tag": ['Mathematical', 'Recursion', 'Algorithms', 'Dynamic Programming']
    },
    "Check Mirror in N-ary tree": {
        "company": ['Amazon', 'D-E-Shaw', 'Hike', 'MakeMyTrip'],
        "tag": ['Stack', 'Queue', 'Tree', 'STL', 'Data Structures']
    },
    "Number of Palindromic paths in a Matrix": {
        "company": ['Samsung'],
        "tag": ['Matrix', 'palindrome', 'Data Structures']
    },
    "Form coils in a matrix": {
        "company": ['Yahoo'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Minimums in Array": {
        "company": [],
        "tag": ['Arrays', 'STL', 'Data Structures']
    },
    "Sum of Subarrays": {
        "company": [],
        "tag": [
            'Arrays',
            'Mathematical',
            'Modular Arithmetic',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Check if a string is repetition of its substring of k-length": {
        "company": [],
        "tag": ['Strings', 'Map', 'Data Structures']
    },
    "Nine Divisors": {
        "company": [],
        "tag": ['Searching', 'Prime Number', 'sieve', 'Binary Search', 'Algorithms']
    },
    "Mathematical manipulation": {
        "company": [],
        "tag": ['Prime Number', 'sieve']
    },
    "Sonam Bewafa asks questions": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Data Structures', 'Algorithms']
    },
    "Minimum number of deletions and insertions.": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Ways to sum to N": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Find patterns": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Minimize the Heights II": {
        "company": ['Microsoft', 'Adobe'],
        "tag": ['Arrays', 'Greedy', 'Data Structures', 'Algorithms']
    },
    "Number of Coins": {
        "company": ['Paytm',
            'Morgan Stanley',
            'Accolite',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Snapdeal',
            'Oracle',
            'Visa',
            'Google',
            'Synopsys'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Skip the work": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Maximum XOR subset": {
        "company": [],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Count number of substrings": {
        "company": ['D-E-Shaw'],
        "tag": [
            'sliding-window',
            'two-pointer-algorithm',
            'Strings',
            'Dynamic Programming',
            'Algorithms'
        ]
    },
    "Maximum sum increasing subsequence": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Possible paths": {
        "company": [],
        "tag": [
            'Divide and Conquer',
            'DFS',
            'Graph',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Find the element that appears once": {
        "company": ['Amazon', 'Microsoft', 'Qualcomm', 'Codenation'],
        "tag": ['Searching', 'Algorithms']
    },
    "Archana and her tricky string": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'series',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Nth digit in sequence": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Pallindrome Patterns": {
        "company": [],
        "tag": ['Strings', 'palindrome', 'Data Structures']
    },
    "Crazy Equations": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Square Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Numbers with 0 as a digit": {
        "company": ['Jabong'],
        "tag": ['Mathematical', 'Numbers', 'Algorithms']
    },
    "Cost of Sweets": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Max possible amount": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Egg Dropping Puzzle": {
        "company": [
            'VMWare', 'Amazon',
            'Microsoft', 'Samsung',
            'D-E-Shaw', 'Hike',
            'MakeMyTrip', 'Oracle',
            'Goldman Sachs', 'MAQ Software',
            'Google', 'Myntra',
            'nearbuy', 'Opera',
            'Philips', 'Service Now',
            'Unisys'
        ],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Composite and  Prime": {
        "company": [],
        "tag": ['Dynamic Programming', 'Prime Number', 'Algorithms']
    },
    "Count of n digit numbers whose sum of digits equals to given sum": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Part of it.": {
        "company": [],
        "tag": ['Mathematical', 'series', 'logical-thinking', 'Algorithms']
    },
    "Min Coin": {
        "company": [],
        "tag": ['Dynamic Programming', 'Greedy', 'Algorithms']
    },
    "Prime factorization and geek number": {
        "company": [],
        "tag": ['Prime Number', 'Numbers']
    },
    "Print the Sequence": {
        "company": ['Microsoft'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Edit Distance": {
        "company": ['Amazon', 'Microsoft', 'Goldman Sachs', 'Google'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Rank The Permutations": {
        "company": ['Amazon', 'FactSet'],
        "tag": ['number-theory', 'Combinatorial']
    },
    "Recursively remove all adjacent duplicates": {
        "company": ['Paytm', 'Samsung'],
        "tag": ['Strings', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "Reaching the heights": {
        "company": [],
        "tag": ['Arrays', 'Sorting', 'Misc', 'Data Structures', 'Algorithms']
    },
    "Equal 0, 1 and 2": {
        "company": [],
        "tag": ['Hash', 'Strings', 'Data Structures']
    },
    "Large Factorials": {
        "company": [],
        "tag": ['Arrays', 'factorial', 'Data Structures']
    },
    "Smallest factorial number": {
        "company": [],
        "tag": [
            'Searching',
            'Mathematical',
            'factorial',
            'Binary Search',
            'Algorithms'
        ]
    },
    "Carmichael Numbers": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Knapsack with Duplicate Items": {
        "company": ['Amazon', 'Google'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Smith Number": {
        "company": [],
        "tag": ['Mathematical', 'series', 'sieve', 'Algorithms']
    },
    "Friends Pairing Problem": {
        "company": [],
        "tag": ['Dynamic Programming', 'Modular Arithmetic', 'Algorithms']
    },
    "N Digit numbers with digits in increasing order": {
        "company": ['ABCO'],
        "tag": ['Recursion', 'Algorithms']
    },
    "Two water Jug problem": {
        "company": ['MakeMyTrip', 'MAQ Software'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Image Multiplication": {
        "company": [],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Decode the string": {
        "company": ['Microsoft', 'Facebook'],
        "tag": [
            'Recursion',
            'Stack',
            'Backtracking',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Find the last digit when factorial of A divides factorial of B": {
        "company": [],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Reverse each word in a given string": {
        "company": ['Paytm',
            'Zoho',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'Payu',
            'MAQ Software',
            'Adobe'],
        "tag": ['Strings', 'Stack', 'Data Structures']
    },
    "Numbers with alternative 1's": {
        "company": [],
        "tag": ['Mathematical', 'Map', 'Data Structures', 'Algorithms']
    },
    "Alternate Vowel and Consonant String": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Coins and Game": {
        "company": [],
        "tag": ['Game Theory', 'Backtracking', 'Algorithms']
    },
    "Lucky alive person in a circle": {
        "company": [],
        "tag": [
            'circular-linked-list',
            'Bit Magic',
            'circular linked list',
            'Data Structures'
        ]
    },
    "Biconnected Graph": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "Gold Mine Problem": {
        "company": ['Flipkart', 'Amazon', 'Samsung'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Akku and Binary Numbers": {
        "company": [],
        "tag": ['Bit Magic', 'Binary Search', 'Data Structures', 'Algorithms']
    },
    "Print N-bit binary numbers having more 1s than 0s": {
        "company": [],
        "tag": ['Strings', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "K-th element of two sorted Arrays": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Arrays', 'Divide and Conquer', 'Data Structures', 'Algorithms']
    },
    "Two numbers with odd occurrences": {
        "company": [],
        "tag": ['Operators']
    },
    "Rod Cutting": {
        "company": ['Google'],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Efficiently sorting numbers in range from 0 to n^2 - 1": {
        "company": [],
        "tag": ['Sorting', 'Sqrt Decomposition', 'Algorithms']
    },
    "Find the string in grid": {
        "company": ['Zoho', 'Flipkart', 'Amazon', 'Microsoft', 'Samsung', 'FactSet'],
        "tag": ['Recursion', 'DFS', 'Matrix', 'Data Structures', 'Algorithms']
    },
    "String Subsequence": {
        "company": ['Accolite'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Get Minimum Squares": {
        "company": ['Amazon', 'Microsoft', 'Wipro'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Happiest Triplet": {
        "company": [],
        "tag": ['Arrays', 'Searching', 'Sorting', 'Data Structures', 'Algorithms']
    },
    "Circular tour": {
        "company": ['Zoho',
            'Flipkart',
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'FactSet',
            'Google'],
        "tag": [
            'sliding-window',
            'Queue',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Top k numbers in a stream": {
        "company": ['Accolite', 'Amazon', 'Media.net'],
        "tag": ['Arrays', 'Map', 'priority-queue', 'Data Structures']
    },
    "Missing Intervals": {
        "company": ['Google'],
        "tag": ['Arrays', 'STL', 'Data Structures']
    },
    "QuickSort on Doubly Linked List": {
        "company": ['HSBC'],
        "tag": ['doubly-linked-list', 'Linked List', 'Data Structures']
    },
    "Mr Modulo and Pairs": {
        "company": [],
        "tag": ['Arrays', 'Modular Arithmetic', 'Data Structures', 'Algorithms']
    },
    "Swapping pairs make sum equal": {
        "company": ['Amazon'],
        "tag": ['Arrays', 'Hash', 'Data Structures']
    },
    "Save Your Life": {
        "company": [],
        "tag": ['Kadane', 'Algorithms']
    },
    "The Infinite String": {
        "company": ['National Instruments'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "Rotate String": {
        "company": [],
        "tag": ['Strings', 'implementation', 'Data Structures']
    },
    "Marks of PCM": {
        "company": [],
        "tag": ['Sorting', 'STL', 'Algorithms']
    },
    "Yes XOR No": {
        "company": [],
        "tag": ['number-theory', 'Mathematical', 'Numbers', 'Algorithms']
    },
    "Letters Collection": {
        "company": [],
        "tag": ['Matrix', 'CPP', 'Data Structures']
    },
    "Killing Spree": {
        "company": [],
        "tag": ['Mathematical', 'Divide and Conquer', 'Binary Search', 'Algorithms']
    },
    "Pizza Mania": {
        "company": [],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Node at distance": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Euler circuit and Path": {
        "company": [],
        "tag": ['Graph', 'Data Structures']
    },
    "The Tiny Miny": {
        "company": [],
        "tag": ['Arrays', 'Data Structures']
    },
    "Find the N-th character": {
        "company": [],
        "tag": ['Strings', 'Data Structures']
    },
    "Merge Sort on Doubly Linked List": {
        "company": [],
        "tag": [
            'doubly-linked-list',
            'Linked List',
            'Sorting',
            'Merge Sort',
            'Data Structures',
            'Algorithms'
        ]
    },
    "Implementing Dijkstra Algorithm": {
        "company": ['Flipkart', 'Microsoft'],
        "tag": ['Graph', 'Data Structures', 'Algorithms']
    },
    "Detect cycle in an undirected graph": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'MakeMyTrip',
            'Oracle',
            'Adobe'],
        "tag": ['DFS', 'Graph', 'union-find', 'Data Structures']
    },
    "Sum of permutations": {
        "company": [],
        "tag": ['Arrays', 'Modular Arithmetic', 'Data Structures', 'Algorithms']
    },
    "Largest Independent Set Problem": {
        "company": [],
        "tag": ['Dynamic Programming', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Circle of strings": {
        "company": ['Flipkart', 'Accolite', 'Microsoft', 'FactSet'],
        "tag": ['Strings', 'Graph', 'Data Structures']
    },
    "Detect cycle in a directed graph": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'MakeMyTrip',
            'Oracle',
            'Goldman Sachs',
            'Adobe',
            'BankBazaar',
            'Rockstand'],
        "tag": ['Graph', 'Data Structures']
    },
    "Super Primes": {
        "company": [],
        "tag": ['Searching', 'Algorithms']
    },
    "Diagonal Traversal of Binary Tree": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Tree', 'Data Structures']
    },
    "Fill up buckets": {
        "company": [],
        "tag": ['permutation', 'Combinatorial']
    },
    "Search Pattern (KMP-Algorithm)": {
        "company": ['Microsoft'],
        "tag": ['Strings', 'Pattern Searching', 'Data Structures', 'Algorithms']
    },
    "Unique partitions": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Recursion', 'Backtracking', 'Algorithms']
    },
    "Dimensions of Rectangle": {
        "company": [],
        "tag": ['Mathematical', 'Combinatorial', 'Algorithms']
    },
    "Largest Divisibility Test": {
        "company": ['Samsung'],
        "tag": ['Mathematical', 'Algorithms']
    },
    "7 Segment Display": {
        "company": [],
        "tag": ['Greedy', 'Mathematical', 'Algorithms']
    },
    "Card Rotation": {
        "company": [],
        "tag": ['permutation', 'Combinatorial', 'Queue', 'Data Structures']
    },
    "Largest subsquare surrounded by X": {
        "company": ['D-E-Shaw'],
        "tag": ['Matrix', 'Data Structures']
    },
    "Special Matrix": {
        "company": ['Amazon'],
        "tag": ['Dynamic Programming', 'Algorithms']
    },
    "Minimum steps to get desired array": {
        "company": [],
        "tag": ['Arrays', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Topological sort": {
        "company": ['Moonfrog Labs',
            'Flipkart',
            'Morgan Stanley',
            'Accolite',
            'Amazon',
            'OYO Rooms',
            'Samsung',
            'D-E-Shaw',
            'Visa'],
        "tag": ['Graph', 'Data Structures']
    },
    "Delete a node from BST": {
        "company": ['Accolite', 'Amazon', 'Samsung', 'Adobe', 'Qualcomm'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Min distance between two given nodes of a Binary Tree": {
        "company": ['Amazon',
            'Samsung',
            'MakeMyTrip',
            'Ola Cabs',
            'Linkedin',
            'Qualcomm'],
        "tag": ['Tree', 'Data Structures']
    },
    "Quick Sort on Linked List": {
        "company": ['Paytm'],
        "tag": ['Linked List', 'Data Structures']
    },
    "Maximum difference between node and its ancestor": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Range Minimum Query": {
        "company": [],
        "tag": ['Segment-Tree', 'Advanced Data Structure']
    },
    "Additive sequence": {
        "company": [],
        "tag": ['Strings', 'Recursion', 'Data Structures', 'Algorithms']
    },
    "Clone a Binary Tree": {
        "company": ['Amazon', 'Synopsys'],
        "tag": ['Tree', 'Data Structures']
    },
    "Multiply two strings": {
        "company": ['Flipkart',
            'Amazon',
            'Microsoft',
            'Samsung',
            'Adobe',
            'Google',
            'Facebook'],
        "tag": ['Strings', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Max sum subarray by removing at most one element": {
        "company": [],
        "tag": ['Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Bipartite Graph": {
        "company": ['Flipkart', 'Microsoft', 'Samsung'],
        "tag": ['DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Minimum Swaps to Sort": {
        "company": ['Microsoft'],
        "tag": ['Arrays', 'Sorting', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Bridge edge in a graph": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms'],
        "tag": ['Graph', 'Data Structures']
    },
    "Binary Tree to CDLL": {
        "company": ['Amazon', 'SAP Labs'],
        "tag": ['Linked List', 'Tree', 'Data Structures']
    },
    "Duplicate subtree in Binary Tree": {
        "company": ['Google'],
        "tag": ['Tree', 'Data Structures']
    },
    "Euler Circuit in an Undirected Graph": {
        "company": [],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Find the Closest Element in BST": {
        "company": ['Amazon', 'MAQ Software'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures']
    },
    "k-th smallest element in BST": {
        "company": ['Accolite', 'Amazon', 'Google'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Find a pair with given target in BST": {
        "company": ['VMWare',
            'Flipkart',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'Snapdeal'],
        "tag": ['Binary Search Tree', 'Data Structures']
    },
    "Populate Inorder Successor for all nodes": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Merge k Sorted Arrays": {
        "company": ['VMWare', 'Flipkart', 'Amazon', 'Microsoft', 'Citrix'],
        "tag": ['Arrays', 'Sorting', 'Heap', 'Data Structures', 'Algorithms']
    },
    "Leftmost and rightmost nodes of binary tree": {
        "company": ['Amazon'],
        "tag": ['Tree', 'Data Structures']
    },
    "Bleak Numbers": {
        "company": ['SAP Labs'],
        "tag": ['Bit Magic', 'Data Structures']
    },
    "Find the missing no in string": {
        "company": ['Intuit'],
        "tag": ['Strings', 'Data Structures']
    },
    "Construct tree from Inorder and LevelOrder": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Length of longest palindrome in linked list": {
        "company": ['Accolite', 'Microsoft'],
        "tag": ['Linked List', 'palindrome', 'Data Structures']
    },
    "Construct a Full Binary Tree": {
        "company": [],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Pairs violating BST property": {
        "company": ['BankBazaar'],
        "tag": ['Binary Search Tree', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Duplicate Subtrees": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Convert Level Order Traversal to BST": {
        "company": [],
        "tag": ['Data Structures', 'Algorithms']
    },
    "Mirror of a given node": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Construct Tree from Preorder Traversal": {
        "company": ['Amazon', 'Hike'],
        "tag": ['Traversal', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Count Number of SubTrees having given Sum": {
        "company": ['Microsoft'],
        "tag": ['Recursion', 'Tree', 'Data Structures', 'Algorithms']
    },
    "Foldable Binary Tree": {
        "company": ['Expedia'],
        "tag": ['Tree', 'Data Structures']
    },
    "Occurences of 2 as a digit": {
        "company": ['Amazon'],
        "tag": ['number-theory']
    },
    "Polynomial Addition": {
        "company": ['Amazon'],
        "tag": ['Linked List', 'Mathematical', 'Data Structures', 'Algorithms']
    },
    "Complete Binary Tree": {
        "company": [],
        "tag": ['Queue', 'Tree', 'BFS', 'Data Structures', 'Algorithms']
    },
    "Number of root to leaf paths": {
        "company": [],
        "tag": ['Tree', 'Data Structures']
    },
    "Interleaved Strings": {
        "company": ['Paytm',
            'Amazon',
            'Microsoft',
            'FactSet',
            'Google',
            'Zillious',
            'Yahoo'],
        "tag": ['Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms']
    },
    "Minimum Spanning Tree": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Samsung', 'Cisco'],
        "tag": ['Greedy', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Make Binary Tree From Linked List": {
        "company": ['Amazon'],
        "tag": ['Queue', 'Tree', 'Data Structures']
    },
    "Max length chain": {
        "company": ['Amazon', 'Microsoft'],
        "tag": ['Dynamic Programming', 'Greedy', 'Algorithms']
    },
    "Find the number of islands": {
        "company": ['Paytm', 'Flipkart',
            'Amazon', 'Microsoft',
            'OYO Rooms', 'Samsung',
            'Snapdeal', 'Citrix',
            'D-E-Shaw', 'MakeMyTrip',
            'Ola Cabs', 'Visa',
            'Intuit', 'Google',
            'Linkedin', 'Opera',
            'One97', 'Streamoid Technologies',
            'Informatica'],
        "tag": ['DFS', 'Graph', 'Data Structures', 'Algorithms']
    },
    "Construct Binary Tree from Parent Array": {
        "company": [ 'Amazon', 'Microsoft', 'Snapdeal' ],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Extreme nodes in alternate order": {
        "company": ['Amazon'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Check if subtree": {
        "company": ['Amazon',
        'Microsoft',
        'OYO Rooms',
        'MakeMyTrip',
        'Adobe',
        'SAP Labs',
        'Cavisson System'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Add all greater values to every node in a BST": {
        "company": ['Amazon'],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures' ]
    },
    "Delete nodes having greater value on right": {
        "company": [ 'Amazon'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Smallest number on left": {
        "company": [],
        "tag": [ 'Stack', 'Data Structures' ]
    },
    "Generate IP Addresses": {
        "company": [ 'Amazon'],
        "tag": [ 'Strings', 'Backtracking', 'Data Structures', 'Algorithms' ]
    },
    "Reverse alternate nodes in Link List": {
        "company": ['Amazon', 'Walmart' ],
        "tag":[ 'Linked List', 'Data Structures' ] 
    },
    "Count BST nodes that lie in a given range": {
        "company": ['D-E-Shaw', 'Google'],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures' ]
    },
    "Maximum length Bitonic Subarray": {
        "company": [ 'Microsoft'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Dyck Path": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Design a tiny URL or URL shortener": {
        "company": ['Microsoft', 'Hike'],
        "tag": [ 'Arrays', 'Strings', 'Data Structures' ]
    },
    "Power of Largest Prime": {
        "company": [],
        "tag": [ 'Mathematical', 'Prime Number', 'Algorithms' ]
    },
    "Concatenation of Zig-Zag String in n Rows": {
        "company": [ 'PayPal'],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "Factorials of large numbers": {
        "company": ['Morgan Stanley',
        'Microsoft',
        'Samsung',
        'MakeMyTrip',
        'MAQ Software',
        'Adobe',
        'Philips',
        'BrowserStack'],
        "tag":[ 'number-theory', 'Strings', 'Combinatorial', 'Data Structures' ] 
    },
    "Count Numbers in Range": {
        "company": [],
        "tag": [ 'Mathematical', 'Numbers', 'sieve', 'Algorithms' ]
    },
    "Maximize The Array": {
        "company": ['Microsoft'],
        "tag": [
            'Arrays',
            'Mathematical',
            'Numbers',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Count Integral Points": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Largest square formed in a matrix": {
        "company": ['Amazon', 'Samsung'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    },
    "Modular Exponentiation for large numbers": {
        "company": ['Google'],
        "tag": [ 'Divide and Conquer', 'Binary Search', 'Algorithms' ]
    },
    "Maximum path sum in matrix": {
        "company": ['Flipkart',
        'Amazon',
        'Microsoft',
        'OYO Rooms',
        'Samsung',
        'MakeMyTrip'],
        "tag": [ 'Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms' ]
    },
    "Rank of Matrix": {
        "company": [],
        "tag": [ 'Mathematical', 'Matrix', 'Data Structures', 'Algorithms' ]
    },
    "Sum of bit differences": {
        "company": ['Google'],
        "tag": [ 'Arrays', 'Bit Magic', 'Data Structures' ]
    },
    "Count ways to N'th Stair(Order does not matter)": {
        "company": ['Accolite', 'Amazon'],
        "tag": [ 'Dynamic Programming', 'Mathematical', 'Algorithms' ]
    },
    "Consecutive 1's not allowed": {
        "company": ['Flipkart', 'Morgan Stanley', 'Microsoft', 'Snapdeal'],
        "tag": [ 'Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms' ]
    },
    "Longest Even Length Substring": {
        "company": [ 'Microsoft' ],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "Count of Subarrays": {
        "company": [],
        "tag": [ 'Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms' ]
    },
    "Longest Span in two Binary Arrays": {
        "company": [],
        "tag": [
            'prefix-sum',
            'sliding-window',
            'Arrays',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Tic Tac Toe": {
        "company": ['Flipkart', 'Accolite', 'Amazon', 'Microsoft'],
        "tag":[ 'Arrays', 'Data Structures' ] 
    },
    "Sum Of Prime": {
        "company": [],
        "tag": [ 'number-theory' ]
    },
    "Maximum Sub Array": {
        "company": ['Amazon', 'Microsoft', 'Intuit'],
        "tag": [ 'Arrays', 'Divide and Conquer', 'Data Structures', 'Algorithms' ]
    },
    "Complement": {
        "company": ['Amazon'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Equal Sum": {
        "company": [],
        "tag":[ 'Arrays', 'Data Structures' ] 
    },
    "Total Decoding Messages": {
        "company": ['Zoho',
        'Flipkart',
        'Morgan Stanley',
        'Amazon',
        'Microsoft',
        'OYO Rooms',
        'MakeMyTrip',
        'Goldman Sachs',
        'Nutanix',
        'Linkedin',
        'Facebook'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    },
    "Knight Walk": {
        "company": ['Amazon', 'Microsoft', 'Goldman Sachs', 'Google'],
        "tag": [ 'DFS', 'Graph', 'BFS', 'Data Structures', 'Algorithms' ]
    },
    "Hamiltonian Path": {
        "company": [ 'Amazon'],
        "tag": [ 'DFS', 'Graph', 'Backtracking', 'Data Structures', 'Algorithms' ]
    },
    "Stepping Numbers": {
        "company": [ 'Amazon'],
        "tag": [ 'DFS', 'BFS', 'Algorithms' ]
    },
    "Water Overflow": {
        "company": [ 'Amazon', 'D-E-Shaw'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    },
    "Maximum Tip Calculator": {
        "company": ['Amazon', 'TCS'],
        "tag": [ 'Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms' ]
    },
    "Flattening a Linked List": {
        "company": ['Paytm',
        'Flipkart',
        'Amazon',
        'Microsoft',
        'Snapdeal',
        '24*7 Innovation Labs',
        'Payu',
        'Visa',
        'Goldman Sachs',
        'Qualcomm',
        'Drishti-Soft'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Bottom View of Binary Tree": {
        "company": ['Paytm',
        'Flipkart',
        'Accolite',
        'Amazon',
        'OYO Rooms',
        'Walmart',
        'CouponDunia'],
        "tag":[ 'Tree', 'Data Structures' ] 
    },
    "Kth element in Matrix": {
        "company": ['Accolite', 'Amazon'],
        "tag": [ 'Matrix', 'Heap', 'Data Structures' ]
    },
    "Intersection Point in Y Shaped Linked Lists": {
        "company": ['VMWare',        'Flipkart',
        'Accolite',      'Amazon',
        'Microsoft',     'Snapdeal',
        'D-E-Shaw',      'FactSet',
        'MakeMyTrip',    'Visa',
        'Goldman Sachs', 'MAQ Software',
        'Adobe',         'Qualcomm'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Remove loop in Linked List": {
        "company": ['VMWare',        'Morgan Stanley',
        'Amazon',        'Microsoft',
        'Snapdeal',      'MakeMyTrip',
        'Oracle',        'Walmart',
        'Goldman Sachs', 'Adobe',
        'Qualcomm',      'Kuliza',
        'Netskope'],
        "tag": [
            'Linked List',
            'two-pointer-algorithm',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Largest BST": {
        "company": [ 'Flipkart', 'Amazon', 'Microsoft', 'Samsung', 'D-E-Shaw'],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures', 'Sorting' ]
    },
    "Connect Nodes at Same Level": {
        "company": [ 'Flipkart',
        'Accolite',
        'Amazon',
        'Microsoft',
        'OYO Rooms',
        'Ola Cabs',
        'Oracle',
        'Adobe',
        'Google',
        'Boomerang Commerce',
        'Xome'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Top View of Binary Tree": {
        "company": [ 'Paytm', 'Ola Cabs', 'Walmart' ],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures' ]
    },
    "Special Keyboard": {
        "company": ['Paytm', 'Flipkart', 'Amazon', 'Microsoft', 'Google'],
        "tag": [ 'Dynamic Programming', 'Recursion', 'Algorithms' ]
    },
    "K Sum Paths": {
        "company": [ 'Flipkart', 'Amazon', 'Walmart'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Rat in a Maze Problem - I": {
        "company": [ 'Amazon', 'Microsoft' ],
        "tag": [ 'Backtracking', 'Algorithms' ]
    },
    "Number of ways": {
        "company": ['Flipkart', 'Amazon'],
        "tag": [ 'Dynamic Programming', 'Mathematical', 'Algorithms' ]
    },
    "Rotate a 2D array without using extra space": {
        "company": ['Amazon', 'Google', 'Facebook' ],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Length of the longest substring": {
        "company": ['Morgan Stanley', 'Amazon', 'Microsoft', 'Google', 'Synopsys'],
        "tag":[ 'sliding-window', 'Strings', 'Data Structures', 'Algorithms' ] 
    },
    "Handshakes": {
        "company": [ 'Amazon'],
        "tag": [ 'Recursion', 'Algorithms' ]
    },
    "Integer to Words": {
        "company": ['Zoho', 'Amazon', 'Microsoft', 'Oracle'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Tree from Postorder and Inorder": {
        "company": ['Amazon', 'Microsoft', 'Hike', 'Adobe' ],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Sorting Elements of an Array by Frequency": {
        "company": ['Zoho', 'Oracle', 'Zycus' ],
        "tag":[ 'Hash', 'Sorting', 'Data Structures', 'Algorithms' ] 
    },
    "Valid Substring": {
        "company": [ 'Amazon'],
        "tag": [ 'Strings', 'Stack', 'Data Structures' ]
    },
    "Nuts and Bolts Problem": {
        "company": ['Amazon', 'Hike', 'MakeMyTrip', 'MAQ Software', 'Adobe'],
        "tag": [ 'Arrays', 'Hash', 'Data Structures' ]
    },
    "String formation from substring": {
        "company": ['Amazon', 'MakeMyTrip' ],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "Not a subset sum": {
        "company": ['Salesforce' ],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Find the Safe Position": {
        "company": [],
        "tag": [ 'Mathematical', 'Recursion', 'Algorithms' ]
    },
    "Largest Number formed from an Array": {
        "company": [ 'Paytm', 'Zoho', 'Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Count the Reversals": {
        "company": [ 'Amazon'],
        "tag": [ 'Strings', 'Stack', 'Queue', 'Data Structures' ]
    },
    "Find Prime numbers in a range": {
        "company": ['VMWare', 'Qualcomm', 'GE' ],
        "tag": [ 'Prime Number' ]
    },
    "Digit multiplier": {
        "company": [ 'Amazon', 'FactSet'],
        "tag": [ 'Mathematical', 'Numbers', 'Algorithms' ]
    },
    "Fibonacci Sum": {
        "company": ['Goldman Sachs' ],
        "tag": [ 'Mathematical', 'Fibonacci', 'Algorithms' ]
    },
    "A Simple Fraction": {
        "company": [],
        "tag": [ 'Hash', 'Mathematical', 'Data Structures', 'Algorithms' ]
    },
    "Find the number of subarrays having even sum": {
        "company": [],
        "tag": [ 'Arrays', 'Mathematical', 'Data Structures', 'Algorithms' ]
    },
    "Integral Points Inside Triangle": {
        "company": [],
        "tag": [ 'Mathematical', 'Geometric', 'Algorithms' ]
    },
    "Number of pairs": {
        "company": ['FactSet'],
        "tag": [ 'Arrays', 'Sorting', 'Data Structures', 'Algorithms' ]
    },
    "Comment Removal": {
        "company": ['BrowserStack'],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "Fun With Expresions": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Filling Bucket": {
        "company": [],
        "tag": [ 'Dynamic Programming', 'Mathematical', 'permutation', 'Algorithms' ]
    },
    "Add Binary Strings": {
        "company": ['Amazon', 'Microsoft', 'Facebook'],
        "tag":[ 'Strings', 'Mathematical', 'Data Structures', 'Algorithms' ] 
    },
    "Arrange Balls": {
        "company": [],
        "tag": [ 'Dynamic Programming', 'Mathematical', 'permutation', 'Algorithms' ]
    },
    "Maximum Difference": {
        "company": [],
        "tag": [ 'Arrays', 'Stack', 'Data Structures' ]
    },
    "Column name from a given column number": {
        "company": ['Paytm',
        'Amazon',
        'Microsoft',
        'Samsung',
        'Goldman Sachs',
        'Directi'],
        "tag": [ 'Strings', 'Mathematical', 'Data Structures', 'Algorithms' ]
    },
    "Row with max 1s": {
        "company": ['Amazon', 'Microsoft', 'Snapdeal' ],
        "tag": [ 'Arrays', 'Matrix', 'Data Structures' ]
    },
    "Maximum Product Subarray": {
        "company": [
            'Morgan Stanley',
            'Amazon',
            'Microsoft',
            'OYO Rooms',
            'D-E-Shaw',
            'Google'],
        "tag": [ 'Arrays', 'Dynamic Programming', 'Data Structures', 'Algorithms' ]
    },
    "Number of paths in a matrix with k coins": {
        "company": ['Amazon' ],
        "tag": [
            'Dynamic Programming',
            'Recursion',
            'Matrix',
            'Backtracking',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Jumping Numbers": {
        "company": ['Amazon'],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Sum of two elements with sum nearest to zero": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'Snapdeal' ],
        "tag": [
            'Arrays',
            'Searching',
            'Mathematical',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Segregate even and odd nodes in a Link List": {
        "company": [],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Maximize Number of 1's": {
        "company": ['Accolite', 'Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Number of positive integral solutions": {
        "company": [],
        "tag": [
            'Strings',
            'Mathematical',
            'permutation',
            'Combinatorial',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Pythagorean Triplet": {
        "company": [ 'Amazon', 'Adobe'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Count Occurences of Anagrams": {
        "company": ['Flipkart', 'Amazon', 'Microsoft', 'Intuit'],
        "tag": [ 'sliding-window', 'Arrays', 'Data Structures', 'Algorithms' ]
    },
    "Sum of Middle Elements of two sorted arrays": {
        "company": ['Amazon', 'D-E-Shaw'],
        "tag": [ 'Arrays', 'Divide and Conquer', 'Data Structures', 'Algorithms' ]
    },
    "pth common ancestor in BST": {
        "company": [],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures' ]
    },
    "Add 1 to a number represented as linked list": {
        "company": [ 'Amazon' ],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Rearrange a linked list": {
        "company": ['Amazon', 'Microsoft'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Add two numbers represented by linked lists": {
        "company": ['Flipkart',
        'Morgan Stanley',
        'Accolite',
        'Amazon',
        'Microsoft',
        'Snapdeal',
        'MakeMyTrip',
        'Qualcomm'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Lowest Common Ancestor in a Binary Tree": {
        "company": ['Flipkart',         'Accolite',
        'Amazon',           'Microsoft',
        'OYO Rooms',        'Snapdeal',
        'MakeMyTrip',       'Payu',
        'Google',           'Times Internet',
        'Cisco',            'PayPal',
        'Expedia',          'Twitter',
        'American Express'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Diameter of a Binary Tree": {
        "company": ['Amazon', 'Microsoft', 'OYO Rooms' ],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Boundary Traversal of binary tree": {
        "company": ['Flipkart',
        'Morgan Stanley',
        'Accolite',
        'Amazon',
        'Microsoft',
        'OYO Rooms',
        'Samsung',
        'Snapdeal',
        'FactSet',
        'Hike',
        'Payu',
        'Kritikal Solutions'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Rotate a Linked List": {
        "company": [ 'Accolite', 'Amazon', 'Microsoft', 'MakeMyTrip'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Merge two sorted linked lists": {
        "company": ['Zoho',      'Flipkart',
        'Accolite',  'Amazon',
        'Microsoft', 'Samsung',
        'FactSet',   'MakeMyTrip',
        'Oracle',    'Brocade',
        'Synopsys',  'OATS Systems',
        'Belzabar'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Remove leading zeros from an IP address": {
        "company": [],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "N trailing zeroes in factorials": {
        "company": [],
        "tag": [ 'number-theory', 'factorial', 'Binary Search', 'Algorithms' ]
    },
    "The Celebrity Problem": {
        "company": ['Zoho',
        'Flipkart',
        'Amazon',
        'Microsoft',
        'Google',
        'Fab.com',
        'One97',
        'United Health Group'],
        "tag": [ 'Arrays', 'Stack', 'Data Structures' ]
    },
    "Max sum in the configuration": {
        "company": ['Amazon'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Absolute List Sorting": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": [ 'Linked List', 'Data Structures' ]
    },
    "Check if Linked List is Palindrome": {
        "company": ['Accolite',
        'Amazon',
        'Microsoft',
        'Snapdeal',
        'MakeMyTrip',
        'Adobe',
        'Yodlee Infotech',
        'KLA Tencor',
        'Kritikal Solutions'],
        "tag": [ 'Linked List', 'palindrome', 'Data Structures' ]
    },
    "Sorted subsequence of size 3": {
        "company": ['Amazon', 'FactSet', 'Walmart' ],
        "tag":[ 'Arrays', 'Data Structures' ] 
    },
    "Get minimum element from stack": {
        "company": ['Flipkart',  'Amazon',
        'Microsoft', 'Snapdeal',
        'D-E-Shaw',  'FactSet',
        'Walmart',   'Goldman Sachs',
        'SAP Labs',  'Sapient',
        'One97',     'GreyOrange',
        'Kuliza'],
        "tag": [ 'Stack', 'Data Structures' ]
    },
    "Vertical Traversal of Binary Tree": {
        "company": ['Flipkart',     'Accolite',
        'Amazon',       'Microsoft',
        'MakeMyTrip',   'Walmart',
        'BrowserStack', 'Dell',
        'Grofers',      'Netskope'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Is Binary Tree Heap": {
        "company": ['Hike'],
        "tag": [ 'Binary Search Tree', 'Tree', 'Heap', 'Data Structures' ]
    },
    "Delete nodes greater than k": {
        "company": ['Microsoft'],
        "tag": [ 'Binary Search Tree', 'Tree', 'Data Structures' ]
    },
    "Counting elements in two arrays": {
        "company": ['Amazon'],
        "tag": [
            'Arrays',
            'Searching',
            'Binary Search',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Merge Sort for Linked List": {
        "company": ['Paytm',
        'Accolite',
        'Amazon',
        'Microsoft',
        'MAQ Software',
        'Adobe',
        'Veritas'],
        "tag": [
            'Linked List',
            'Merge Sort',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Distinct occurrences": {
        "company": ['Amazon', 'Google'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    },
    "Print Nodes having K leaves": {
        "company": ['Amazon'],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Leaves to DLL": {
        "company": ['Amazon', 'Linkedin'],
        "tag": [ 'Linked List', 'Tree', 'Data Structures' ]
    },
    "Firing employees": {
        "company": [],
        "tag":[
            'DFS',
            'Prime Number',
            'Tree',
            'BFS',
            'Data Structures',
            'Algorithms'
          ] 
    },
    "Longest repeating and non-overlapping substring": {
        "company": ['MakeMyTrip', 'Walmart'],
        "tag": [ 'Strings', 'Dynamic Programming', 'Data Structures', 'Algorithms' ]
    },
    "Predecessor and Successor": {
        "company": ['Ola Cabs'],
        "tag":[ 'Binary Search Tree', 'Tree', 'Data Structures' ] 
    },
    "Sum of nodes on the longest path from root to leaf node": {
        "company": [],
        "tag": [ 'Traversal', 'Tree', 'Data Structures', 'Algorithms' ]
    },
    "Base Equivalence": {
        "company": [],
        "tag": [
            'Mathematical',
            'Bit Magic',
            'Binary Search',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Equalize the Towers ": {
        "company": [],
        "tag": [ 'Arrays', 'Binary Search', 'Data Structures', 'Algorithms' ]
    },
    "Broken blocks": {
        "company": [],
        "tag": [ 'Dynamic Programming', 'Matrix', 'Data Structures', 'Algorithms' ]  
    },
    "Power Of 2 and Subsequences": {
        "company": [],
        "tag": [ 'Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms' ]
    },
    "First Digit": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Max value after m range operation": {
        "company": ['FactSet'],
        "tag": [
            'prefix-sum',
            'Arrays',
            'Mathematical',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Merge Sort": {
        "company": ['Paytm',
        'Amazon',
        'Microsoft',
        'Snapdeal',
        'Oracle',
        'Goldman Sachs',
        'Wipro',
        'Qualcomm',
        'Boomerang Commerce',
        'Grofers',
        'Target Corporation',
        'Medlife'],
        "tag": [ 'Divide and Conquer', 'Sorting', 'Algorithms' ]
    },
    "Sum Tree": {
        "company": [ 'Amazon', 'Microsoft', 'D-E-Shaw', 'Goldman Sachs', 'Adobe' ],
        "tag": [ 'Tree', 'Data Structures' ]
    },
    "Heap Sort": {
        "company": ['Microsoft',
        'Samsung',
        '24*7 Innovation Labs',
        'Oracle',
        'Visa',
        'Intuit',
        'SAP Labs',
        'Belzabar'],
        "tag": [ 'Sorting', 'Heap', 'Data Structures', 'Algorithms' ]
    },
    "Square root of a number": {
        "company": ['VMWare', 'Flipkart', 'Accolite', 'Amazon', 'Microsoft' ],
        "tag": [ 'Searching', 'Mathematical', 'Binary Search', 'Algorithms' ]
    },
    "Dice throw": {
        "company": ['Amazon', 'Microsoft'],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Smallest number": {
        "company": ['OYO Rooms', 'MAQ Software'],
        "tag": [ 'Greedy', 'Algorithms' ]
    },
    "Possible groups": {
        "company": ['Amazon'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "k largest elements": {
        "company": ['Amazon', 'Microsoft', 'Samsung', 'Walmart', 'Google'],
        "tag": [ 'Arrays', 'Sorting', 'Heap', 'Data Structures', 'Algorithms' ]
    },
    "Surpasser Count": {
        "company": ['Google', 'Yahoo'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Matchsticks game": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "3 Divisors": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Missing number in matrix": {
        "company": [],
        "tag": [ 'Matrix', 'Data Structures' ]
    },
    "Minimum sum": {
        "company": ['Google'],
        "tag": [
            'Arrays',
            'Sorting',
            'Binary Search',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Arranging the array": {
        "company": ['Microsoft'],
        "tag": [ 'Arrays', 'Data Structures' ]
    },
    "Help a Thief!!!": {
        "company": [],
        "tag": [ 'Matrix', 'Data Structures' ]
    },
    "Count Total Setbits": {
        "company": [],
        "tag": [ 'Mathematical', 'Bit Magic', 'Data Structures', 'Algorithms' ]
    },
    "Equivalent Sub-Arrays": {
        "company": [],
        "tag": [
            'sliding-window',
            'two-pointer-algorithm',
            'Arrays',
            'Hash',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Subset Sums": {
        "company": [],
        "tag": [ 'Recursion', 'Algorithms' ]
    },
    "First and last occurrences of x": {
        "company": ['Amazon'],
        "tag": [ 'Arrays', 'Binary Search', 'Data Structures', 'Algorithms' ]
    },
    "String Subsequence Game": {
        "company": ['Yatra.com'],
        "tag": [ 'Hash', 'Strings', 'Data Structures' ]
    },
    "Shuffle integers": {
        "company": ['Amazon', 'OYO Rooms'],
        "tag": [ 'Arrays', 'Recursion', 'Data Structures', 'Algorithms' ]
    },
    "Count triplets with sum smaller than X": {
        "company": ['Amazon', 'SAP Labs'],
        "tag": [ 'two-pointer-algorithm', 'Arrays', 'Data Structures', 'Algorithms' ]    
    },
    "XOR Game": {
        "company": [],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Sum of two large numbers": {
        "company": ['Zoho', 'Amazon', 'Microsoft'],
        "tag": [ 'Strings', 'Data Structures' ]
    },
    "Probability of Knight": {
        "company": ['Amazon', 'Directi'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    },
    "Special Numbers": {
        "company": ['Morgan Stanley', 'Adobe'],
        "tag": [ 'Mathematical', 'Algorithms' ]
    },
    "Flood fill Algorithm": {
        "company": ['Microsoft', 'Google'],
        "tag": [
            'Recursion',
            'DFS',
            'Matrix',
            'Graph',
            'Data Structures',
            'Algorithms'
          ]
    },
    "Min cut Square": {
        "company": ['Google'],
        "tag": [ 'Dynamic Programming', 'Algorithms' ]
    }

}