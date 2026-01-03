import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      industry,
      leadsPerMonth,
      referralSource,
      streetAddress,
      city,
      state,
      zip,
      strategyCall,
    } = body;

    // Validate required fields
    if (!name || !company || !industry || !leadsPerMonth || !referralSource || !streetAddress || !city || !state || !zip) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format shipping address
    const shippingAddress = `${streetAddress}\n${city}, ${state} ${zip}`;

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Lead Buyer\'s Playbook <book@leadbuyerplaybook.com>',
      to: ['bill.rice@kaleidico.com'],
      cc: ['ken.gemmell@kaleidico.com'],
      subject: `New Paperback Request: ${name} from ${company}`,
      html: `
        <h2>New Paperback Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Leads per Month:</strong> ${leadsPerMonth}</p>
        <p><strong>Referral Source:</strong> ${referralSource}</p>
        <p><strong>Strategy Call Requested:</strong> ${strategyCall ? 'Yes' : 'No'}</p>
        <h3>Shipping Address:</h3>
        <p>${shippingAddress.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

