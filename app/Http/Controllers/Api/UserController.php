<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function purchase(Request $request) {

        $user = User::where('email', $request->input('email'))->first();

        try {

            $user->createOrGetStripeCustomer();
            
            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );
            
            $payment = $payment->asStripePaymentIntent();

            // store records to DB & relations                
            $order = $user->orders()->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount
                ]);
            
            $cart_items = json_decode($request->input('cart'), true);
                
            foreach( $cart_items as $item ) {
                $order->events()
                      ->attach($item['event_id'], ['quantity' => $item['quantity']]);
            }

            $order->load('events');

            return $order;

        }
        catch(\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

    }
}
