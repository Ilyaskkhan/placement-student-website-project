'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { Accordion, Card, SimpleGrid, Stack, Text } from '@mantine/core';
import SimpleTextBlock from '../components/simpleTextBlock';

export default function Events(): ReactNode {
  return (
    <PageLayout>
      <Stack justify='center'>
        <h2>Tickets</h2>
         <SimpleGrid cols={2}>
            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)">
                <h3>Weekend Adult</h3>
                <Text size='xl' fw={700} c='white'>£30 </Text>
            </Card>
            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)">
                <h3>Weekend Concession</h3>
                <Text size='xl' fw={700} c='white'>£25 </Text>
            </Card>


            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)">
                <h3>Family Weekend</h3>
                <Text size='xl' fw={700} c='white'>£120 </Text>
                <Text c='dimmed' c='white'>2 Adults + up to 3 Children</Text>
            </Card>



            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)">
                <h3>Day Ticket</h3>
                <Text size='xl' fw={700} c='white'>£18 </Text>
                <Text c='dimmed' c='white'>Available for Saturday or Sunday</Text>
            </Card>
            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)" >
                <h3>Camping</h3>
                <Text size='xl' fw={700} c='white'>£15 </Text>
                <Text c='dimmed' c='white'>Per night</Text>
            </Card>
            <Card shadow="sm" withBorder radius='lg'bg="rgb(46, 107, 80)">
                <h3>Children under 12</h3>
                <Text size='xl' fw={700} c='white'>Free </Text>
                <Text c='dimmed' c='white'>When accompanied by an adult</Text>
            </Card>
        </SimpleGrid> 



<Card withBorder radius='lg'>
 <  Accordion defaultValue="Apples">
      <Accordion.Item  value="important-info">
      < Accordion.Control>totle</Accordion.Control>
      <Accordion.Panel>description</Accordion.Panel>
    </Accordion.Item>
</Accordion>



</Card>





        </Stack>  
        </PageLayout>          
  );
}

