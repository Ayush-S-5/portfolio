const data = {
  1: {
    heading: "Feb 25, 2024",
    description: <h1>How Internet Works ?</h1>,
    body: (
      <div>
        <br />

        <h2>Part 1 : Demystifying How the Internet Connects</h2>
        <p>
          Let’s kick off our journey by understanding how the internet is like a
          giant puzzle, connecting different pieces to create a seamless
          experience. You might have seen the internet shown as a cloud with
          links between devices, but that’s just the tip of the iceberg. The
          internet isn’t a single, distributed network; it’s like a big
          playground with many centers where devices connect directly or
          indirectly.
        </p>
        <br />

        <p>Cracking the Code of Connectivity</p>
        <p>
          In this first part, we’ll uncover the magic of how devices talk to
          each other over networks, using special helpers called routers.
          Imagine routers as traffic cops on the internet streets, making sure
          information gets to the right place.
        </p>
        <br />

        <p>Meet the Players: Nodes and Networks</p>
        <p>
          Now, think of nodes as players in this internet game — your laptop or
          a server hosting websites. Every player has a unique address, like a
          home address, that helps them find each other. On the internet, this
          special address is called an IP address.
        </p>
        <br />

        <p>Sending Messages Across the Internet</p>
        <p>
          So, how do these players send messages to each other? It’s like
          sending a letter. They use their addresses to make sure the message
          reaches the right player. But here’s the fun part: sometimes, the
          message has to travel through other players before it gets to its
          destination. Enter routers, the helpful guides that connect different
          playgrounds on the internet. Think of routers as bridges between
          different neighborhoods on the internet. They link various networks
          together, allowing nodes from one network to communicate with nodes
          from another. So, when you’re sending an email or streaming a video,
          routers work behind the scenes to make sure your data reaches its
          destination efficiently.
        </p>
        <p>
          <a
            href="https://medium.com/@ut2002mishra/part-1-demystifying-how-the-internet-connects-444bc9c76efb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Further
          </a>
        </p>
      </div>
    ),
  },
  2: {
    heading: "March 13, 2024",
    description: <h1>DNS and its Security</h1>,
    body: (
      <div>
        <br />

        <h2>Introduction</h2>
        <p>
          The Internet’s phonebook is known as the Domain Name System (DNS),
          which enables humans to access online information through domain names
          such as espn.com or nytimes.com. Internet Protocol (IP) addresses, on
          the other hand, are used by web browsers to interact. DNS translates
          domain names to IP addresses, allowing browsers to load Internet
          resources. Each Internet-connected device has a unique IP address used
          by other machines to find it. DNS servers remove the need for humans
          to memorize complex IP addresses, such as 192.168.1.1 (in IPv4) or
          alphanumeric ones like 2400: cb00:2048: 1:c629: d7a2 (in IPv6).
        </p>
        <br />

        <p>System Model & Architecture</p>
        <p>
          When a DNS client sends such a request, the first responding server
          does not provide the needed IP address. Instead, it directs the
          request to another server that is lower in the DNS hierarchy, and that
          one to another until the IP address is fully resolved. There are a few
          stops in this process.
        </p>
        <br />

        <p>Caching Methodology</p>
        <p>
          An operating system (OS) of a computer keeps a cache of web pages that
          you visit. However, the DNS cache records may become obsolete or
          damaged over time. If you encounter difficulties accessing a website,
          the cause might be a corrupted DNS cache on your device. In that case,
          resetting the DNS cache may resolve the problem you are facing.
        </p>
        <br />

        <p>DNS Cache Poisoning</p>
        <p>
          Attackers can poison DNS caches by impersonating DNS nameservers,
          making a request to a DNS resolver, and then forging the reply when
          the DNS resolver queries a nameserver. This is possible because DNS
          servers use UDP instead of TCP, and because currently there is no
          verification for DNS information.
        </p>
        <p>
          <a
            href="https://medium.com/@ut2002mishra/dns-and-its-security-7bc29594be09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Further
          </a>
        </p>
      </div>
    ),
  },
  3: {
    heading: "June 17, 2024",
    description: <h1>Disjoint Set Union</h1>,
    body: (
      <div>
        <br />

        <h2>Introduction</h2>
        <p>
          Disjoint Set Union (DSU) is a versatile data structure designed to
          efficiently manage a collection of disjoint sets. It empowers
          algorithms dealing with connectivity problems, dynamic graph problems,
          and more. DSU offers operations to unite (union) two sets and
          ascertain the set to which a specific element belongs.
        </p>
        <br />

        <p>Naive Implementation</p>
        <p>
          The initial implementation uses an array called parent to represent
          sets. Unfortunately, this basic approach performs poorly when sets
          degenerate into long chains. Consequently, the time complexity for the
          find_set(v) operation becomes O(n).
        </p>
        <br />
        <p>
          <a
            href="https://medium.com/@ut2002mishra/disjoint-set-union-ea3977867ae7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Further
          </a>
        </p>
      </div>
    ),
  },
};
export default data;
