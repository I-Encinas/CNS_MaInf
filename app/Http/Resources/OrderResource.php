<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id'=>$this->id,
            'order_type_id'=> new ServiceResource($this->service_id), 
            'status'=>$this->status,
            'date_o'=>(new Carbon($this->date_o))->format('Y-m-d h:m:s'),  
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),  
            'updated_at'=>(new Carbon($this->updated_at))->format('Y-m-d'),  
        ];
    }
}
