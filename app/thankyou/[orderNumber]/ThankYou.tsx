'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #979797;
  font-size: 24px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-top: 24px;
`;

const BackButton = styled.button`
  margin-top: 24px;
`;

function ThankYou() {
  const pathname = usePathname();
  const router = useRouter();
  const orderNumber: string = pathname?.replace('/thankyou/', '') ?? '';

  return (
    <Wrapper>
      <Title>感謝您的購買，我們會盡快將商品送達！</Title>
      <Content>請記住以下訂單編號，以便查詢</Content>
      <Content>{orderNumber}</Content>
      <BackButton onClick={() => router.push('/')}>繼續購物</BackButton>
    </Wrapper>
  );
}

export default ThankYou;
