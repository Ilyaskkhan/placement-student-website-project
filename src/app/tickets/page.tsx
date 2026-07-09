'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { Accordion, Button, Card, SimpleGrid, Stack, Text, Title, Anchor } from '@mantine/core';
import SimpleTextBlock from '../components/simpleTextBlock';
import React from 'react';

export default function Events(): ReactNode {

    const [selectedTicket, setSelectedTicket] = React.useState<string | null>(null);

  return (
    <PageLayout>
      <Stack justify='center'>
        <Title order={2}>Tickets</Title>
         <SimpleGrid cols={2}>
            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Weekend Adult' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Weekend Adult')} 
            >
                <h3>Weekend Adult</h3>
                <Text size='xl' fw={700} c='white'>£30 </Text>
            </Card>
            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Weekend Concession' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Weekend Concession')} 
            >
                <h3>Weekend Concession</h3>
                <Text size='xl' fw={700} c='white'>£25 </Text>
            </Card>


            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Family Weekend' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Family Weekend')} 
            >
                <h3>Family Weekend</h3>
                <Text size='xl' fw={700} c='white'>£120 </Text>
                <Text c='dimmed' c='white'>2 Adults + up to 3 Children</Text>
            </Card>



            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Day Ticket' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Day Ticket')} 
            >
                <h3>Day Ticket</h3>
                <Text size='xl' fw={700} c='white'>£18 </Text>
                <Text c='dimmed' c='white'>Available for Saturday or Sunday</Text>
            </Card>
           
           
           
           
            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Camping' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Camping')} 
            >
                <h3>Camping</h3>
                <Text size='xl' fw={700} c='white'>£15 </Text>
                <Text c='dimmed' c='white'>Per night</Text>
            </Card>
           
           
           
           
            <Card shadow="sm" withBorder radius='lg'
            bg={selectedTicket === 'Children under 12' ? 'yellow' : 'rgb(46, 107, 80)'}
            onClick={() => setSelectedTicket('Children under 12')} 
            >
                <h3>Children under 12</h3>
                <Text size='xl' fw={700} c='white'>Free </Text>
                <Text c='dimmed' c='white'>When accompanied by an adult</Text>
            </Card>
        </SimpleGrid> 



<Card withBorder radius='lg'>
 <  Accordion defaultValue="Apples">
      <Accordion.Item  value="important-info">
      < Accordion.Control fw={700}>Important Information</Accordion.Control>
      <Accordion.Panel>On-the-day tickets are available at the gate subject to capacity. Adult weekend gate price: £42.
All tickets are non-refundable unless the event is cancelled.
Wristbands must be worn at all times while on site.</Accordion.Panel>
    </Accordion.Item>
</Accordion>


</Card>

<Card withBorder radius='lg'> Frequently Asked Questions
 <  Accordion defaultValue="Apples">
      <Accordion.Item  value="parking">
      < Accordion.Control fw={700}>Is parking Included?</Accordion.Control>
      <Accordion.Panel>Yes, we have a large free car park situated about a 10-minute walk from the main festival entrance. Accessible parking is available much closer to the entrance for blue badge holders.</Accordion.Panel>
    </Accordion.Item>
</Accordion>





 <  Accordion defaultValue="Apples">
      <Accordion.Item  value="camping facilities">
      < Accordion.Control fw={700}>What are the camping facilities like?</Accordion.Control>
      <Accordion.Panel>Camping is in a dedicated field adjacent to the festival site. We provide portable toilets and drinking water standpipes. Please note there are no showers or electrical hookups.</Accordion.Panel>
    </Accordion.Item>
</Accordion>


 <  Accordion defaultValue="Apples">
      <Accordion.Item  value="site accessibility">
      < Accordion.Control fw={700}>Is the site accessible?</Accordion.Control>
      <Accordion.Panel>The festival takes place in a working meadow, so the ground can be uneven. However, we ensure all main thoroughfares are kept clear, and we provide accessible toilets and viewing areas at the main stages.</Accordion.Panel>
    </Accordion.Item>
</Accordion>


<  Accordion defaultValue="Apples">
      <Accordion.Item  value="Dog">
      < Accordion.Control fw={700}>Can I bring my dog?</Accordion.Control>
      <Accordion.Panel>Sorry, no dogs are allowed on the festival site or in the campsites, with the exception of registered assistance dogs.</Accordion.Panel>
    </Accordion.Item>
</Accordion>


</Card>



<Anchor  href="https://www.musicglue.com/tenterdenfolkfestival/tickets" variant="gradient" gradient={{ from: 'teal', to: 'blue'}} fw={1000} size='xl'>
  Book {selectedTicket} ticket
</Anchor>












        </Stack>  
        </PageLayout>          
  );
}

